'use client'

import {flexRender, getCoreRowModel, getSortedRowModel, useReactTable, getPaginationRowModel} from "@tanstack/react-table";
import {Icons} from "@/components/ui/Icons";
import {useEffect, useState} from "react";
import {DndProvider, useDrag, useDrop} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const DraggableRow = ({ row, reorderRow, sort }) => {
	const [, dropRef] = useDrop({
		accept: 'row',
		drop: draggedRow => reorderRow(draggedRow.index, row.index)
	})

	const [{ isDragging }, dragRef, previewRef] = useDrag({
		collect: monitor => ({
			isDragging: monitor.isDragging(),
		}),
		item: () => row,
		type: 'row',
	})

	return (
		<tr ref={previewRef} style={{ opacity: isDragging ? 0.5 : 1 }}>

			{row.getVisibleCells().map((cell, index) => {
				if(index === 0){
					return (
						<td key={cell.id} ref={dropRef}>
							{sort[0]?.desc === undefined ? <button className="o-table__button-move" ref={dragRef}><Icon extraClass="o-table__button-move-icon" name="move"/></button> : ''}
							{flexRender(cell.column.columnDef.cell, cell.getContext())}
						</td>
					)
				}
				return (
					<td key={cell.id}>
						{flexRender(cell.column.columnDef.cell, cell.getContext())}
					</td>
				)
			})}
		</tr>
	)
}

export const Table = ({data, columns, pageSize = 3, type, order = false, container = true, renderCell}) => {
	const [sorting, setSorting] = useState([]);
	const [data1, setData1] = useState([]);

	useEffect(() => {
		setData1(data)
	}, [data]);

	const table = useReactTable({
		data: data1,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		state: {sorting},
		onSortingChange: setSorting,
		getPaginationRowModel: getPaginationRowModel(),
		getRowId: row => row.id,
		initialState: {
			pagination: {
				pageSize
			}
		}
	});

	const paginationButtons = [];
	const paginationSelect = [];


	for(let i = 0; i < table.getPageCount(); i++){
		paginationButtons.push(
			<button
				key={i}
				className={`o-table__page${table.getState().pagination.pageIndex === i ? ' o-table__page--is-active' : ''}`}
				disabled={!table.getPageCount()}
				onClick={() => table.setPageIndex(i)}>{i+1}</button>
		);

		paginationSelect.push(
			{label: i+1, value: i}
		)
	}

	const reorderRow = (draggedRowIndex, targetRowIndex) => {
		data1.splice(targetRowIndex, 0, data1.splice(draggedRowIndex, 1)[0])
		setData1([...data1])
	}

	const rerender = () => setData1(() => data)

	return (
		<div className={`${type === 'sencillo' ? '' : `${container ? 'container' : null} relative z-[1]`}`}>
			<div className={`o-table ${type === 'sencillo' ? 'o-table--easy' : ''}`}>
				{order
					? <DndProvider backend={HTML5Backend}>
						<table>
							<thead>
							{table.getHeaderGroups().map(headerGroup => (
								<tr key={headerGroup.id}>
									{headerGroup.headers.map(header => (
										<th
											className="text-[13px] text-blue-950"
											key={header.id}
											onClick={header.column.getToggleSortingHandler()}>
											{flexRender(header.column.columnDef.header, header.getContext())}
											<span>{{asc: <Icons name="ascendente"/>, desc: <Icons name="descendente"/>}[header.column.getIsSorted() ?? null]}</span>
										</th>
									))}
								</tr>
							))}
							</thead>

							<tbody>

							{table.getRowModel().rows.map(row => (
								<DraggableRow key={row.id} row={row} reorderRow={reorderRow} sort={sorting}/>
							))}
							</tbody>
						</table>
					</DndProvider>
					: <table>
						<thead>
						{table.getHeaderGroups().map(headerGroup => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map(header => (
									<th key={header.id} onClick={header.column.getToggleSortingHandler()}>
										{flexRender(header.column.columnDef.header, header.getContext())}
										<span>{{asc: <Icons name="ascendente"/>, desc: <Icons name="descendente"/>}[header.column.getIsSorted() ?? null]}</span>
									</th>
								))}
							</tr>
						))}
						</thead>

						<tbody>
						{table.getRowModel().rows.map((row, index) => (
							<tr key={index}>
								{row.getVisibleCells().map((cell, index) => (
									<td key={cell.id}>
										{renderCell ? renderCell(cell) : flexRender(cell.column.columnDef.cell, cell.getContext())}
										{/*{flexRender(cell.column.columnDef.cell, cell.getContext())}*/}
									</td>
								))}
							</tr>
						))}
						</tbody>
					</table>
				}
			</div>

			{table.getPageCount() > 1 ?
				(<div className="flex items-center justify-center flex-wrap gap-5 mt-12 pb-4">
					<ul className="o-table__pagination">
						<li className="o-table__item">
							<button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()} className="o-table__previous"></button>
						</li>
						{
							paginationButtons.map((page, index) => {
								const base = Math.floor(table.getState().pagination.pageIndex / 10) * 10;

								if(paginationButtons.length <= 10){
									return (
										<li key={index} className="o-table__item">
											{page}
										</li>
									)
								}

								if(paginationButtons.length > 10){
									if(index >= base && index <= base + 9) {
										return (
											<li key={index} className="o-table__item">
												{page}
											</li>
										)
									}
								}
							})
						}
						<li className="o-table__item">
							<button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()} className="o-table__next"></button>
						</li>
					</ul>

					{/*{paginationButtons.length > 10 ?
						<Formik
							initialValues={{page: table.getState().pagination.pageIndex}}
							onSubmit={(values) => {
								table.setPageIndex(values.page)
							}}>
							{({handleSubmit, setFieldValue}) => (
								<Form>
									<CustomSelect
										name="page"
										options={paginationSelect}
										value={table.getState().pagination.pageIndex}
										onChange={value => {
											setFieldValue('page', value.value);
											handleSubmit()
										}}
									/>
								</Form>
							)}
						</Formik> : null}*/}
				</div>) : null
			}
		</div>
	)
}
