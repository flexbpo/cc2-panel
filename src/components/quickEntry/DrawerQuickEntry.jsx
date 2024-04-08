'use client'

import {Drawer} from "@/components/ui/Drawer";
import {useDrawersStore} from "@/store/drawers.store";
import {useForm} from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datalist-input/dist/styles.css';
import 'react-day-picker/dist/style.css';
import {DateTimePicker} from "@/components/forms/DateTimePicker";
import {SimpleAutoComplete} from "@/components/forms/SimpleAutoComplete";
import {getCarrier} from "@/services/carrier.api";
import {getArrivalPort} from "@/services/arrival-port.api";
import {AutoComplete} from "@/components/forms/AutoComplete";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Input} from "@/components/forms/Input";
import {generateRandomCodeTripNumber} from "@/hooks/generateRandomCodeTripNumber";
import {Table} from "@/components/ui/Table";
import {useEffect, useState} from "react";
import SimpleBar from "simplebar-react";
import {Icons} from "@/components/ui";

const dynamicSchema = z.object({
	description: z.string().min(1, { message: 'Description is required' }),
	quantity: z.string().min(1, { message: 'Quantity is required' }),
	uom: z.string().min(1, { message: 'UOM is required' }),
	gross: z.string().min(1, { message: 'Gross Weight is required' }),
	marks: z.string().min(1, { message: 'Marks And Numbers is required' }),
});

const schema = z.object({
		carrier: z.string().min(1, {message: 'Carrier is required'}),
		"trip-number": z.string().min(1, {message: 'Trip number is required'}),
		"estimated-arrival": z.string().min(1, {message: 'Estimated arrival is required'}),
		"arrival-port": z.string().min(1, {message: 'Arrival port is required'}),
		conveyance: z.string().min(1, {message: 'Conveyance is required'}),
		equipment: z.string().min(1, {message: 'Equipment is required'}),
		driver: z.string().min(1, {message: 'Driver is required'}),
		"carrier-scn": z.string().min(1, {message: 'Carrier SCN is required'}),
		scn: z.string().min(1, {message: 'SCN is required'}),
		entry: z.string().min(1, {message: 'Entry is required'}),
		type: z.string().min(1, {message: 'Type is required'}),
		shipper: z.string().min(1, {message: 'Shipper is required'}),
		consignee: z.string().min(1, {message: 'Consignee is required'}),
		"port-of-landing": z.string().min(1, {message: 'Port of landing is required'}),
		commodities: z.array(dynamicSchema)
	})

const defaultValues = {
	carrier: '',
	"trip-number": '',
	"estimated-arrival": '',
	"arrival-port": '',
	conveyance: '',
	equipment: '',
	driver: '',
	"carrier-scn": '',
	scn: '',
	type: '',
	entry: '',
	shipper: '',
	consignee: '',
	"port-of-landing": ''
}

export const DrawerQuickEntry = () => {
	const {
		control,
		setValue,
		handleSubmit,
		reset,
		clearErrors,
		trigger,
		formState: {errors}} = useForm({
			defaultValues,
			resolver: async (data, context, options) => {
				// you can debug your validation schema here
				//console.log('formData', data)
				//console.log('validation result', await zodResolver(schema)(data, context, options))
				return zodResolver(schema)(data, context, options)
			},
			mode: "onChange"
		});
	const [dynamicRows, setDynamicRows] = useState([{ description: '', quantity: '', uom: '', gross: '', marks: '' }]);
	const drawerQuickEntry = useDrawersStore(state => state.drawerQuickEntry);
	const showDrawerQuickEntry = useDrawersStore(store => store.showDrawerQuickEntry)
	const addDynamicRow = () => {
		setDynamicRows([...dynamicRows, { description: '', quantity: '', uom: '', gross: '', marks: '' }]);
	};
	const [tripNumberRandomCode, setTripNumberRandomCode] = useState('')

	const updateDynamicRow = (name, value) => {
		const [field, index, property] = name.match(/^(\w+)\[(\d+)\]\.(\w+)$/).slice(1);

		const updatedRows = [...dynamicRows];

		updatedRows[index][property] = value;

		setDynamicRows(updatedRows);
	};

	const deleteDynamicRow = (index) => {
		const updatedRows = dynamicRows.filter((_, i) => i !== index);
		setDynamicRows(updatedRows);
	};

	const columns = [
		{
			header: 'Description',
			accessorKey: 'description'
		}, {
			header: 'Quantity',
			accessorKey: 'quantity'
		}, {
			header: 'UOM',
			accessorKey: 'uom',
		}, {
			header: 'Gross Weight',
			accessorKey: 'gross'
		}, {
			header: 'Marks And Numbers',
			accessorKey: 'marks'
		}, {
			header: 'Actions',
			accessorKey: 'actions'
		},
	];

	const onSubmit = (values) => console.log(values)

	useEffect(() => {
		setValue('commodities', dynamicRows)
	}, [dynamicRows]);


	return (
		<Drawer title='Quick E-Manifest' icon="quick-entry" show={drawerQuickEntry} setShow={() => showDrawerQuickEntry()}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<SimpleBar className="h-full max-h-[calc(100svh-80px)] lg:max-h-[calc(100svh-120px)]">
					<h2 className="mb-2.5">Trip information</h2>

					<ul className="grid grid-cols-2 gap-x-2.5 gap-y-5">
						<li className="col-start-1 col-end-3 self-start">
							<div className="flex justify-between">
								<label>Trip #</label>

								<button
									type="button"
									className="transition-all flex mb-1.5 text-xs text-primary-500 custom-dark:text-primary-500 hover:text-primary-550 hover:-translate-y-1"
									onClick={async () => {
										const randomTripNumber = generateRandomCodeTripNumber();
										setValue('trip-number', randomTripNumber);
										await trigger('trip-number');
									}}>
									Generate
								</button>
							</div>
							<div className="flex relative">
								<SimpleAutoComplete
									name="carrier"
									placeholder="Carrier"
									getItems={getCarrier}
									errorsVisible={false}
									selectedValue={(item) => item.code}
									control={control}
									className="!border-r-0 !rounded-tr-none !rounded-br-none max-w-[70px]">
									{(item) => (
										<>
											<span>{item.name}</span> - <span>{item.code}</span>
										</>
									)}
								</SimpleAutoComplete>

								<Input
									className="!rounded-tl-none !rounded-bl-none !flex-1 !w-[calc(100%-100px)] min-w-0"
									control={control}
									errorVisible={false}
									name="trip-number"
									value={tripNumberRandomCode}
									placeholder="Trip number"
									type="text"/>
							</div>

							{errors.carrier || errors["trip-number"]
								? <span className="o-error">
									Carrier and Trip number is required
							</span> : null}
						</li>

						<li className="relative self-start">
							<DateTimePicker
								label="Estimated Arrival"
								name="estimated-arrival"
								control={control}/>
						</li>

						<li className="relative self-start">
							<SimpleAutoComplete
								control={control}
								label="Arrival port"
								name="arrival-port"
								getItems={getArrivalPort}
								selectedValue={(item) => `${item.name} - ${item.code}`}>
								{(item) => (
									<>
										<span>{item.name}</span> - <span>{item.code}</span>
									</>
								)}
							</SimpleAutoComplete>
						</li>
					</ul>

					<h2 className="mt-8 mb-2.5">Carrier information</h2>

					<ul className="grid grid-cols-2 gap-x-2.5 gap-y-5">
						<li className="relative self-start">
							<AutoComplete
								control={control}
								label="Conveyance"
								name="conveyance"
								getItems={getArrivalPort}
								selectedValue={(item) => `${item.name} - ${item.code}`}>
								{(item, selectedItemIndex, index) => (
									<>
										<span
											className={`${selectedItemIndex === index ? 'text-white' : 'text-zinc-700'} group-hover/item:text-white block`}>
											{item.name}
										</span>
										<span
											className={`${selectedItemIndex === index ? 'text-white' : 'text-neutral-400'} group-hover/item:text-white text-[10px]`}>
											{item.code}
										</span>
									</>
								)}
							</AutoComplete>
						</li>

						<li className="relative self-start">
							<AutoComplete
								control={control}
								label="Equipment"
								name="equipment"
								getItems={getArrivalPort}
								selectedValue={(item) => `${item.name} - ${item.code}`}>
								{(item, selectedItemIndex, index) => (
									<>
										<span
											className={`${selectedItemIndex === index ? 'text-white' : 'text-zinc-700'} group-hover/item:text-white block`}>
											{item.name}
										</span>
										<span
											className={`${selectedItemIndex === index ? 'text-white' : 'text-neutral-400'} group-hover/item:text-white text-[10px]`}>
											{item.code}
										</span>
									</>
								)}
							</AutoComplete>
						</li>

						<li className="relative self-start">
							<AutoComplete
								control={control}
								label="Driver"
								name="driver"
								getItems={getArrivalPort}
								selectedValue={(item) => `${item.name} - ${item.code}`}>
								{(item, selectedItemIndex, index) => (
									<>
										<span
											className={`${selectedItemIndex === index ? 'text-white' : 'text-zinc-700'} group-hover/item:text-white block`}>
											{item.name}
										</span>
										<span
											className={`${selectedItemIndex === index ? 'text-white' : 'text-neutral-400'} group-hover/item:text-white text-[10px]`}>
											{item.code}
										</span>
									</>
								)}
							</AutoComplete>
						</li>
					</ul>

					<h2 className="mt-8 mb-2.5">New Shipment</h2>

					<ul className="grid grid-cols-2 gap-x-2.5 gap-y-5">
						<li className="col-start-1 col-end-3 self-start">
							<div className="flex justify-between">
								<label>SCN #</label>

								<button
									type="button"
									className="transition-all flex mb-1.5 text-xs text-primary-500 custom-dark:text-primary-500 hover:text-primary-550 hover:-translate-y-1"
									onClick={async () => {
										const randomTripNumber = generateRandomCodeTripNumber();
										setValue('scn', randomTripNumber);
										await trigger('scn');
									}}>
									Generate
								</button>
							</div>
							<div className="flex relative">
								<SimpleAutoComplete
									name="carrier-scn"
									placeholder="Carrier"
									getItems={getCarrier}
									errorsVisible={false}
									selectedValue={(item) => item.code}
									control={control}
									className="!border-r-0 !rounded-tr-none !rounded-br-none max-w-[70px]">
									{(item) => (
										<>
											<span>{item.name}</span> - <span>{item.code}</span>
										</>
									)}
								</SimpleAutoComplete>

								<Input
									className="!rounded-tl-none !rounded-bl-none !flex-1 !w-[calc(100%-100px)] min-w-0"
									control={control}
									errorVisible={false}
									name="scn"
									placeholder="Enter SCN"
									type="text"/>
							</div>

							{errors['carrier-scn'] || errors.scn
								? <span className="o-error">
									Carrier SCN and SCN number is required
							</span> : null}
						</li>

						<li className="relative self-start">
							<SimpleAutoComplete
								control={control}
								label="Type"
								name="type"
								getItems={getArrivalPort}
								selectedValue={(item) => `${item.name} - ${item.code}`}>
								{(item) => (
									<>
										<span>{item.name}</span> - <span>{item.code}</span>
									</>
								)}
							</SimpleAutoComplete>
						</li>

						<li className="relative self-start">
							<SimpleAutoComplete
								control={control}
								label="Entry #"
								name="entry"
								getItems={getArrivalPort}
								selectedValue={(item) => `${item.name} - ${item.code}`}>
								{(item) => (
									<>
										<span>{item.name}</span> - <span>{item.code}</span>
									</>
								)}
							</SimpleAutoComplete>
						</li>

						<li className="relative self-start">
							<AutoComplete
								control={control}
								label="Shipper"
								name="shipper"
								getItems={getArrivalPort}
								selectedValue={(item) => `${item.name} - ${item.code}`}>
								{(item, selectedItemIndex, index) => (
									<>
										<span
											className={`${selectedItemIndex === index ? 'text-white' : 'text-zinc-700'} group-hover/item:text-white block`}>
											{item.name}
										</span>
										<span
											className={`${selectedItemIndex === index ? 'text-white' : 'text-neutral-400'} group-hover/item:text-white text-[10px]`}>
											{item.code}
										</span>
									</>
								)}
							</AutoComplete>
						</li>

						<li className="relative self-start">
							<AutoComplete
								control={control}
								label="Consignee"
								name="consignee"
								getItems={getArrivalPort}
								selectedValue={(item) => `${item.name} - ${item.code}`}>
								{(item, selectedItemIndex, index) => (
									<>
										<span
											className={`${selectedItemIndex === index ? 'text-white' : 'text-zinc-700'} group-hover/item:text-white block`}>
											{item.name}
										</span>
										<span
											className={`${selectedItemIndex === index ? 'text-white' : 'text-neutral-400'} group-hover/item:text-white text-[10px]`}>
											{item.code}
										</span>
									</>
								)}
							</AutoComplete>
						</li>

						<li className="relative self-start">
							<AutoComplete
								control={control}
								label="Port of Landing"
								name="port-of-landing"
								getItems={getArrivalPort}
								selectedValue={(item) => `${item.name} - ${item.code}`}>
								{(item, selectedItemIndex, index) => (
									<>
										<span
											className={`${selectedItemIndex === index ? 'text-white' : 'text-zinc-700'} group-hover/item:text-white block`}>
											{item.name}
										</span>
										<span
											className={`${selectedItemIndex === index ? 'text-white' : 'text-neutral-400'} group-hover/item:text-white text-[10px]`}>
											{item.code}
										</span>
									</>
								)}
							</AutoComplete>
						</li>
					</ul>

					<h3 className="mt-6 mb-2 bg-slate-50 rounded text-zinc-400 text-sm py-1 px-3">
						Commodities
					</h3>

					<Table
						columns={columns}
						data={dynamicRows}
						pageSize={10000}
						renderCell={cell => {

							if (cell.column.columnDef.accessorKey === 'actions') {
								return <button type="button" onClick={() => deleteDynamicRow(cell.row.index)}>
									Delete
								</button>
							}

							if (cell.column.columnDef.accessorKey !== 'actions') {
								const row = dynamicRows[cell.row.index];
								const value = row ? row[cell.column.columnDef.accessorKey] : '';

								return (
									<>
										<Input
											value={value}
											className="!shadow-none"
											errorVisible={false}
											type="text"
											control={control}
											name={`commodities[${cell.row.index}].${cell.column.columnDef.accessorKey}`}
											onUpdate={(name, value) => {
												updateDynamicRow(name, value, cell.row.index)
											}}
										/>
									</>
								)
							}

							return null
						}}
					/>

					<button
						className="text-primary-500 text-[11px] hover:-translate-y-0.5 transition-all" type="button"
						onClick={addDynamicRow}>
						<Icons name="plus"/> Add commodities
					</button>

					{/*<pre>{JSON.stringify(watch(), null, 4)}</pre>
					<pre>{watch('commodities') ? watch('commodities').length : null}</pre>*/}

					<hr className="mt-6 mb-6"/>

					<div className="flex items-center gap-6">
						<button type="submit" className="o-button">
							<span>Save Trip</span>
						</button>

						<button
							type="button"
							className="underline text-primary-500 hover:-translate-y-1 hover:text-primary-400 transition-all"
							onClick={() => {
								setDynamicRows([{description: '', quantity: '', uom: '', gross: '', marks: ''}]);
								reset(defaultValues)
								showDrawerQuickEntry()
							}}>
							Cancel
						</button>
					</div>
				</SimpleBar>
			</form>
		</Drawer>
	)
}
