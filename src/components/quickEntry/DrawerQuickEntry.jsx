'use client'

import {Drawer} from "@/components/ui/Drawer";
import {useDrawersStore} from "@/store/drawers.store";
import {useForm} from "react-hook-form";
import {DateTimePicker} from "@/components/forms/DateTimePicker";
import {SimpleAutoComplete} from "@/components/forms/SimpleAutoComplete";
import {getCarrier} from "@/services/carrier.api";
import {getArrivalPort} from "@/services/arrival-port.api";
import {AutoComplete} from "@/components/forms/AutoComplete";
import {Input} from "@/components/forms/Input";
import {generateRandomCodeTripNumber} from "@/hooks/generateRandomCodeTripNumber";
import {Table} from "@/components/ui/Table";
import {useEffect, useState} from "react";
import SimpleBar from "simplebar-react";
import {Icons} from "@/components/ui";
import {getDrivers} from "@/services/driver.api";
import {yupResolver} from "@hookform/resolvers/yup";
import {quickEManifestValidation} from "@/hooks/validations/quickEManifestValidation";
import 'react-day-picker/dist/style.css';
import {Checkbox} from "@/components/forms/Checkbox";
import {CustomSelect} from "@/components/forms/CustomSelect";
import {uomSelect} from "@/hooks/selects";
import {date} from "@/hooks/date";
import {Select} from "@/components/forms/Select";
import {toast} from "sonner";
import {getEquipments} from "@/services/equipment.api";

const defaultValues = {
	"trip-number": '',
	"estimated-arrival": date(true).fechaHoraFormateada,
	"arrival-port": '',
	conveyance: '',
	fast: false,
	"carrier-scn": '',
	scn: '',
	type: '',
	entry: '',
	shipper: '',
	consignee: '',
	equipment: [{},{},{},{}],
	drivers: [{},{}],
	commodities: [{ description: '', uom: '', quantityUom: '', gross: '', quantityGross: ''}]
}

export const DrawerQuickEntry = () => {
	const [dynamicRows, setDynamicRows] = useState([{ description: '', uom: '', quantityUom: '', gross: '', quantityGross: ''}]);
	const drawerQuickEntry = useDrawersStore(state => state.drawerQuickEntry);
	const showDrawerQuickEntry = useDrawersStore(store => store.showDrawerQuickEntry)
	const [newShipment, setNewShipment] = useState(false);
	const [equipment, setEquipment] = useState([{},{},{},{}]);
	const [drivers, setDrivers] = useState([{},{}]);
	const [addRows, setAddRows] = useState(false);

	const {
		register,
		control,
		setValue,
		handleSubmit,
		reset,
		setFocus,
		trigger,
		watch,
		formState: {errors}} = useForm({
			defaultValues,
			resolver: yupResolver(quickEManifestValidation(newShipment, equipment, drivers)),
			mode: "onChange"
		});

	const addDynamicRow = () => {
		setDynamicRows([...dynamicRows, { description: '', uom: '', quantityUom: '', gross: '', quantityGross: ''}]);
		setAddRows(true);
	};

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
			header: 'UOM',
			accessorKey: 'uom',
		}, {
			header: 'Gross',
			accessorKey: 'gross'
		}, {
			header: '',
			accessorKey: 'actions'
		},
	];

	const onSubmit = (values) => {
		toast.success('Trip Successfully!');
		onReset();
	}

	const onReset = () => {
		setDynamicRows(defaultValues.commodities);
		setEquipment([{},{},{},{}])
		setDrivers([{},{}])
		setNewShipment(false)
		reset(defaultValues)
		showDrawerQuickEntry()
	}

	useEffect(() => {
		setValue('commodities', dynamicRows)
	}, [dynamicRows]);

	useEffect(() => {
		setValue('equipment', equipment)
	}, [equipment]);

	useEffect(() => {
		setValue('drivers', drivers)
	}, [drivers]);

	useEffect(() => {
		setTimeout(() => {
			const input = `commodities[${dynamicRows.length-1}].description`
			setFocus(input)
		}, 10)

	}, [addRows, setFocus])

	return (
		<Drawer title='Quick E-Manifest (ACE)' icon="quick-entry" show={drawerQuickEntry} setShow={() => showDrawerQuickEntry()}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<SimpleBar className="h-[calc(100svh-80px)] lg:h-[calc(100svh-120px)] px-[2px]">
					<ul className="grid grid-cols-2 gap-x-2.5 gap-y-3">
						<li className="relative col-start-1 col-end-3">
							<div className="flex gap-x-3">
								<div className="flex-1">
									<div className="flex justify-between">
										<label>Trip #</label>

										{watch('trip-number')?.length >= 4
											? <button
												type="button"
												className="transition-all flex mb-1.5 text-xs text-primary-500 custom-dark:text-primary-500 hover:text-primary-550 hover:-translate-y-1"
												onClick={async () => {
													const randomTripNumber = generateRandomCodeTripNumber();
													setValue('trip-number', `${watch('trip-number').substring(0, 4)}-${randomTripNumber}`);
													await trigger('trip-number');
												}}>
												Generate
											</button> : null
										}

									</div>

									<SimpleAutoComplete
										name="trip-number"
										getItems={getCarrier}
										errorsVisible={false}
										selectedValue={(item) => item.code}
										control={control}
										inputMask={true}
										className="">
										{(item) => (
											<>
												<span>{item.name}</span> - <span>{item.code}</span>
											</>
										)}
									</SimpleAutoComplete>
								</div>

								<div className="w-10">
									<Checkbox
										label="FAST"
										name="fast"
										control={control}
									/>
								</div>
							</div>
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
								label="Arrival Port"
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

					<ul className="grid grid-cols-2 gap-x-2.5 gap-y-3 mt-3">
						<li className="relative self-start">
							<LabelCustom
								label="Conveyance"
								watch={watch('conveyance').length}
								editFunction={() => console.log('editar')}
								agreeFunction={() => console.log('agregar')}
							/>

							<AutoComplete
								control={control}
								name="conveyance"
								getItems={getArrivalPort}
								selectedValue={(item) => `${item.name} - ${item.code}`}>
								{(item, selectedItemIndex, index) => (
									<>
										<span
											className={`${selectedItemIndex === index ? 'text-white' : 'text-zinc-700 dark:text-white custom-dark:text-white'} group-hover/item:text-white block`}>
											{item.name}
										</span>
										<span
											className={`${selectedItemIndex === index ? 'text-white' : 'text-neutral-400 dark:text-white custom-dark:text-white'} group-hover/item:text-white text-[10px]`}>
											{item.code}
										</span>
									</>
								)}
							</AutoComplete>
						</li>

						{drivers.map((item, index) => (
							<li key={index} className={`${index === 0 || (index === 1 && drivers[0].name !== undefined) || item.name !== undefined ? 'block' : 'hidden'} relative self-start gap-x-2.5 gap-y-3`}>
								{drivers[index].name === undefined
									? <>
										<div className="flex justify-between">
											<label>Drivers</label>

											<div className="flex gap-1">
												<button
													type="button"
													className="transition-all border border-primary-500 rounded-full size-4 flex justify-center items-center mb-1.5 text-xs text-primary-500 custom-dark:text-primary-500 hover:text-primary-550 hover:-translate-y-1"
													onClick={() => console.log('aquí habrá otra acción')}>
													<Icons name="plus"/>
												</button>
											</div>
										</div>

										<AutoComplete
											control={control}
											name={`drivers[${index}].name`}
											getItems={getDrivers}
											selectedValue={async (item) => {
												const nuevosDrivers= [...drivers];
												nuevosDrivers[index] = item;
												setDrivers(nuevosDrivers);
												await trigger(`drivers[0].name`);
												await trigger(`drivers[1].name`);
												return `${item.name}`
											}}>
											{(item, selectedItemIndex, index) => (
												<>
													<span
														className={`${selectedItemIndex === index ? 'text-white' : 'text-zinc-700 dark:text-white custom-dark:text-white'} group-hover/item:text-white block`}>
														{item.name}
													</span>

													<div>
														<strong>
															licence:
														</strong>

														<span
															className={`${selectedItemIndex === index ? 'text-white' : 'text-neutral-400'} group-hover/item:text-white text-[10px]`}>
															{` ${item.licence}`}
														</span>
													</div>

													<div className="flex justify-between">
														{item.inChange
															? <div
																className="bg-primary-550 rounded p-1 shadow text-white">
																{item.inChange}
															</div> : null}

														{item.fast
															? <div
																className="bg-primary-550 rounded p-1 shadow text-white">
																{item.fast}
															</div> : null}
													</div>
												</>
											)}
										</AutoComplete></>
									: <div className="relative border rounded shadow text-[11px] p-2">
										<button
											className="absolute top-1 right-1 hover:text-primary-500 transition-all"
											type="button"
											onClick={async () => {
												const nuevosDrivers = [...drivers];
												nuevosDrivers[index] = {};
												setValue(`drivers[${index}].name`, '');
												await trigger(`drivers[${index}].name`);

												setEquipment(nuevosDrivers);
											}}>
											<Icons name="close"/>
										</button>

										<button
											type="button"
											className="font-bold hover:!text-primary-500 transition-all">
											{drivers[index].name}
										</button>

										<p>{drivers[index].licence}</p>

										<div className="flex justify-between">
											{drivers[index].inChange
												? <p className="bg-primary-550 rounded p-1 shadow text-white">
													{drivers[index].inChange}
												</p> : null}
											{drivers[index].fast
												? <p className="bg-primary-550 rounded p-1 shadow text-white">
													{drivers[index].fast}
												</p> : null}
										</div>
									</div>}
							</li>
						))}

						{equipment.map((item, index) => (
							<li
								key={index}
								className={`${index === 0 || (index === 1 && equipment[0].name !== undefined) || (index === 2 && equipment[1].name !== undefined) || (index === 3 && equipment[2].name !== undefined) || item.name !== undefined ? 'block' : 'hidden'} relative self-start gap-x-2.5 gap-y-3`}>
								{equipment[index].name === undefined
									? <>
										<div className="flex justify-between">
											<label>Equipment</label>

											<div className="flex gap-1">
												<button
													type="button"
													className="transition-all border border-primary-500 rounded-full size-4 flex justify-center items-center mb-1.5 text-xs text-primary-500 custom-dark:text-primary-500 hover:text-primary-550 hover:-translate-y-1"
													onClick={() => console.log('aquí habrá otra acción')}>
													<Icons name="plus"/>
												</button>
											</div>
										</div>

										<AutoComplete
											control={control}
											name={`equipment[${index}].name`}
											getItems={getEquipments}
											selectedValue={async (item) => {
												const nuevosEquipment = [...equipment];
												nuevosEquipment[index] = item;
												setEquipment(nuevosEquipment);
												await trigger(`equipment[0].name`);
												await trigger(`equipment[1].name`);
												await trigger(`equipment[2].name`);
												await trigger(`equipment[3].name`);
												return `${item.name}`
											}}>
											{(item, selectedItemIndex, index) => (
												<>
													<span
														className={`${selectedItemIndex === index ? 'text-white' : 'text-zinc-700 dark:text-white custom-dark:text-white'} group-hover/item:text-white block`}>
														{item.name}
													</span>

													<div>
														<strong>
															description:
														</strong>

														<span
															className={`${selectedItemIndex === index ? 'text-white' : 'text-neutral-400'} group-hover/item:text-white text-[10px]`}>
															{` ${item.description}`}
														</span>
													</div>
												</>
											)}
										</AutoComplete></>
									: <div className="relative border rounded shadow text-[11px] p-2">
										<button
											className="absolute top-1 right-1 hover:text-primary-500 transition-all"
											type="button"
											onClick={async () => {
												const nuevosEquipment = [...equipment];
												nuevosEquipment[index] = {};
												setValue(`equipment[${index}].name`, '');
												await trigger(`equipment[${index}].name`);

												setEquipment(nuevosEquipment);
											}}>
											<Icons name="close"/>
										</button>

										<button
											type="button"
											className="font-bold hover:!text-primary-500 transition-all">
											{equipment[index].name}
										</button>

										<p>{equipment[index].description}</p>
									</div>
								}
							</li>
						))}
					</ul>

					{!newShipment ? <button
						onClick={() => setNewShipment(true)}
						className="mt-5 flex gap-2 items-center transition-all text-[11px] text-primary-500 hover:-translate-y-1"
						type="button">
						New Shipment

						<span
							className="text-[8px] rounded-full border border-primary-500 flex justify-center items-center size-3">
							<Icons name="plus"/>
						</span>
					</button> : null}

					{newShipment ?
						<div>
							<h2 className="mt-3 mb-2.5 text-[11px] font-semibold relative">
								<span
									className="bg-white dark:bg-secondary-800  custom-dark:bg-secondary-800 relative pr-3 z-[1]">
									New Shipment
								</span>

								<hr className="absolute top-1/2 right-0 w-full"/>
							</h2>

							<ul className="grid grid-cols-2 gap-x-2.5 gap-y-3">
								<li className="col-start-1 col-end-3 self-start">
									<li className="relative col-start-1 col-end-3">
										<div className="flex gap-x-3">
											<div className="flex-1">
												<div className="flex justify-between">
													<label>SCN #</label>

													{watch('scn')?.length >= 4
														? <button
															type="button"
															className="transition-all flex mb-1.5 text-xs text-primary-500 custom-dark:text-primary-500 hover:text-primary-550 hover:-translate-y-1"
															onClick={async () => {
																const randomTripNumber = generateRandomCodeTripNumber();
																setValue('scn', `${watch('scn').substring(0, 4)}-${randomTripNumber}`);
																await trigger('scn');
															}}>
															Generate
														</button> : null
													}

												</div>

												<SimpleAutoComplete
													name="scn"
													getItems={getCarrier}
													errorsVisible={true}
													selectedValue={(item) => item.code}
													control={control}
													inputMask={true}
													className="">
													{(item) => (
														<>
															<span>{item.name}</span> - <span>{item.code}</span>
														</>
													)}
												</SimpleAutoComplete>
											</div>
										</div>
									</li>
								</li>

								<li className="relative self-start">
									<CustomSelect
										name="type"
										control={control}
										label="Type"
										options={[
											{value: 'Regular', label: 'Regular'},
											{value: 'QP In-Bond', label: 'QP In-Bond'},
											{value: 'Section 321', label: 'Section 321'}
										]}
									/>

									{/*<SimpleAutoComplete
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
									</SimpleAutoComplete>*/}
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
									<LabelCustom
										label="Shipper"
										watch={watch('shipper').length}
										editFunction={() => console.log('editar')}
										agreeFunction={() => console.log('agregar')}
									/>

									<AutoComplete
										control={control}
										name="shipper"
										getItems={getArrivalPort}
										selectedValue={(item) => `${item.name} - ${item.code}`}>
										{(item, selectedItemIndex, index) => (
											<>
												<span
													className={`group-hover/item:text-white block`}>
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
									<LabelCustom
										label="Consignee"
										watch={watch('consignee').length}
										editFunction={() => console.log('editar')}
										agreeFunction={() => console.log('agregar')}
									/>

									<AutoComplete
										control={control}
										name="consignee"
										getItems={getArrivalPort}
										selectedValue={(item) => `${item.name} - ${item.code}`}>
										{(item, selectedItemIndex, index) => (
											<>
												<span
													className={`group-hover/item:text-white block`}>
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

							<h3 className="mt-6 mb-2 bg-slate-50 dark:bg-secondary-700 rounded text-zinc-400 text-sm py-1 px-3">
								Commodities
							</h3>

							<Table
								columns={columns}
								data={dynamicRows}
								pageSize={10000}
								renderCell={cell => {
									if (cell.column.columnDef.accessorKey === 'actions' && cell.row.index !== 0) {
										return <button
											type="button"
											className="text-gray-300 transition-all px-2 hover:text-rose-600"
											onClick={() => deleteDynamicRow(cell.row.index)}>
											<Icons name="trash"/>
										</button>
									}

									if (cell.column.columnDef.accessorKey === 'actions' && cell.row.index === 0) {
										return <span className="block size-[30px]"></span>
									}

									if (cell.column.columnDef.accessorKey !== 'actions') {
										const row = dynamicRows[cell.row.index];
										const value = row ? row[cell.column.columnDef.accessorKey] : '';

										return (
											<div className="flex">
												<Input
													ref={register}
													value={value}
													className="!shadow-none flex-1"
													errorVisible={false}
													type={`${cell.column.columnDef.accessorKey === 'gross' || cell.column.columnDef.accessorKey === 'uom' ? 'number' : 'text'}`}
													control={control}
													name={`commodities[${cell.row.index}].${cell.column.columnDef.accessorKey}`}
													onUpdate={(name, value) => {
														updateDynamicRow(name, value, cell.row.index)
													}}
												/>

												{cell.column.columnDef.accessorKey === 'uom'
													? <Select
														errorVisible={false}
														control={control}
														name={`commodities[${cell.row.index}].quantityUom`}
														onUpdate={(name) => updateDynamicRow(name, watch(`commodities[${cell.row.index}].quantityUom`), cell.row.index)}
														options={uomSelect}
													/> : null}

												{cell.column.columnDef.accessorKey === 'gross' ?
													<Select
														errorVisible={false}
														control={control}
														name={`commodities[${cell.row.index}].quantityGross`}
														onUpdate={(name) => updateDynamicRow(name, watch(`commodities[${cell.row.index}].quantityGross`), cell.row.index)}
														options={[
															{value:'kilos', label: 'Kilos'},
															{value:'pounds', label: 'Pounds'}
														]}/> : null}
											</div>
										)
									}

									return null
								}}
							/>

							<button
								className="text-primary-500 text-[11px] hover:-translate-y-0.5 transition-all"
								type="button"
								onClick={addDynamicRow}>
								<Icons name="plus"/> Add Commodities
							</button>

							<button
								onClick={() => {
									setNewShipment(false);
									setDynamicRows(defaultValues.commodities)
								}}
								className="underline mt-5 flex gap-2 items-center transition-all text-[11px] text-primary-500 hover:-translate-y-1"
								type="button">
								Cancel shipment
							</button>
						</div> : null}

					<hr className="mt-6 mb-6"/>

					<div className="flex items-center gap-6">
						<button type="submit" className="o-button">
							<span>Save Trip</span>
						</button>

						<button
							type="button"
							className="underline text-primary-500 hover:-translate-y-1 hover:text-primary-400 transition-all"
							onClick={onReset}>
							Cancel
						</button>
					</div>
				</SimpleBar>
			</form>
		</Drawer>
	)
}

const LabelCustom = ({label, watch, editFunction, agreeFunction}) => {
	return (<div className="flex justify-between">
		<label>{label}</label>

		<div className="flex gap-1">
			{watch > 0 ? <button
				title="Edit"
				type="button"
				className="animate-fadeInUp transition-all border border-primary-500 rounded-full size-4 flex justify-center items-center mb-1.5 text-xs text-primary-500 custom-dark:text-primary-500 hover:!text-primary-550 hover:!-translate-y-1"
				onClick={() => editFunction}>
				<Icons name="draft"/>
			</button> : null}

			<button
				type="button"
				className="transition-all border border-primary-500 rounded-full size-4 flex justify-center items-center mb-1.5 text-xs text-primary-500 custom-dark:text-primary-500 hover:text-primary-550 hover:-translate-y-1"
				onClick={() => agreeFunction}>
				<Icons name="plus"/>
			</button>
		</div>
	</div>)
}
