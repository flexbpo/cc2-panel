'use client'

import {Drawer} from "@/components/ui/Drawer";
import {useDrawersStore} from "@/store/drawers.store";
import {useForm} from "react-hook-form";
import { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatalistInput from "react-datalist-input";
import 'react-datalist-input/dist/styles.css';

const generateRandomCode = () => {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	const codeLength = 15;
	let code = '';
	for (let i = 0; i < codeLength; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		code += characters[randomIndex];
	}
	return code;
};

export const DrawerQuickEntry = () => {
	const {setValue, register, handleSubmit, watch, reset, formState: {errors}} = useForm();
	const drawerQuickEntry = useDrawersStore(state => state.drawerQuickEntry);
	const showDrawerQuickEntry = useDrawersStore(store => store.showDrawerQuickEntry)
	const [startDate, setStartDate] = useState(new Date());
	const [generatedCode, setGeneratedCode] = useState('');

	const handleGenerateCode = () => {
		const code = generateRandomCode();
		setGeneratedCode(code);
		setValue('trip-number', code);
	};

	const onSubmit = (values) => {
		console.log(values)
	}

	return (
		<Drawer title='Quick entry' icon="air" show={drawerQuickEntry} setShow={() => showDrawerQuickEntry()}>
			<form onSubmit={handleSubmit(onSubmit)}>

				<h2 className="mb-2.5">Trip information</h2>

				<ul className="grid grid-cols-2 gap-x-2.5 gap-y-5">
					<li>
						<div className="flex justify-between">
							<label>Trip #</label>

							<button
								type="button"
								className="flex mb-1.5 text-xs text-primary-500 custom-dark:text-primary-500"
								onClick={handleGenerateCode}>
								Generate
							</button>
						</div>
						<div className="flex">
							{/*<DatalistInput
								placeholder=""
								className="!border-r-0 !rounded-tr-none !rounded-br-none max-w-[70px]"
								onSelect={(item) => console.log(item.value)}
								items={[
									{ id: 'NOLL', value: 'NOLL TRUCKING - NOLL' },
									{ id: 'BEIO', value: 'BLOCKCHAIN EXPEDITE INC - BEIO' },
									{ id: 'ESVZ', value: 'EZQUIVEZ TRUCKING - ESVZ' }
								]}
							 label=""/>*/}

							<input
								list="codes"
								type="text"
								autoComplete={false}
								className="appearance-none list-none peer !border-r-0 !rounded-tr-none !rounded-br-none max-w-[70px]"
								{...register('carrier', {
									required: true
								})}/>

							<input
								type="text"
								className="!rounded-tl-none !rounded-bl-none !flex-1 !w-[calc(100%-100px)] min-w-0"
								placeholder="Trip Number"
								{...register('trip-number', {
									required: true
								})}/>
						</div>
						{errors.carrier && errors["trip-number"] ? <span className="o-error">Carrier and trip number is required</span> : null}

						<datalist id="codes">
							<option value="NOLL">NOLL TRUCKING - NOLL</option>
							<option value="BEIO">BLOCKCHAIN EXPEDITE INC - BEIO</option>
							<option value="ESVZ">EZQUIVEZ TRUCKING - ESVZ</option>
						</datalist>
					</li>

					<li>
						<label>Estimated Arrival</label>
						<DatePicker
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							showTimeSelect
							dateFormat="MM/d/yyyy h:mm aa"
						/>
						{/*<input
							type="text"
							{...register('entry', {
								required: true
							})}/>
						{errors.entry && <span className="o-error">Entry is required</span>}*/}
					</li>

					<li>
						<label>Arrival Port</label>
						<input
							list="arrival"
							type="text"
							{...register('arrival', {
								required: true
							})}/>
						<datalist id="arrival">
							<option value="PORTLAND - 0101">PORTLAND - 0101</option>
							<option value="LUBEC - 0103">LUBEC - 0103</option>
							<option value="JACKMAN - 0104">JACKMAN - 0104</option>
							<option value="VANCEBORO - 0105">VANCEBORO - 0105</option>
						</datalist>
						{errors['arrival'] ? <span className="o-error">Arrival Port is required</span> : null}
					</li>
				</ul>

				<h2 className="mt-8 mb-2.5">Carrier information</h2>

				<ul  className="grid grid-cols-2 gap-x-2.5 gap-y-5">
					<li>
						<label>Conveyance</label>
						<input
							type="text"
							{...register('conveyance', {
								required: true
							})}/>

						{errors['conveyance'] ? <span className="o-error">Conveyance is required</span> : null}
					</li>

					<li>
						<label>Equipment</label>
						<input
							type="text"
							{...register('equipment', {
								required: true
							})}/>

						{errors['equipment'] ? <span className="o-error">Equipment is required</span> : null}
					</li>

					<li>
						<label>Driver</label>
						<input
							type="text"
							{...register('driver', {
								required: true
							})}/>
						{errors['driver'] ? <span className="o-error">Driver is required</span> : null}
					</li>
				</ul>

				<hr className="mt-6 mb-6"/>

				<div className="flex items-center gap-6">
					<button type="submit" className="o-button">
						<span>Save Trip</span>
					</button>

					<button
						type="button"
						className="underline text-primary-500 hover:-translate-y-1 hover:text-primary-400 transition-all"
						onClick={() => {
							reset()
							showDrawerQuickEntry()
						}}>
						Cancel
					</button>
				</div>
			</form>
		</Drawer>
	)
}
