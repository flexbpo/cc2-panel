'use client'

import {Drawer} from "@/components/ui/Drawer";
import {useDrawersStore} from "@/store/drawers.store";
import {useForm} from "react-hook-form";

export const DrawerQuickEntry = () => {
	const {register, handleSubmit, watch, reset, formState: {errors}} = useForm();
	const drawerQuickEntry = useDrawersStore(state => state.drawerQuickEntry);
	const showDrawerQuickEntry = useDrawersStore(store => store.showDrawerQuickEntry)

	const onSubmit = (values) => {
		console.log(values)
	}

	return (
		<Drawer title='Quick entry' icon="air" show={drawerQuickEntry} setShow={() => showDrawerQuickEntry()}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ul className="grid grid-cols-2 gap-x-2.5 gap-y-5">
					<li>
						<label for="">Entry #</label>
						<input
							type="text"
							{...register('entry', {
								required: true
							})}/>
						{errors.entry && <span className="o-error">Entry is required</span>}
					</li>

					<li>
						<label for="">Entry Date #</label>
						<input
							type="text"
							{...register('entry-date', {
								required: true
							})}/>
						{errors['entry-date'] && <span className="o-error">Entry Date is required</span>}
					</li>

					<li>
						<label for="">Importer</label>
						<input
							type="text"
							{...register('importer', {
								required: true
							})}/>
						{errors['importer'] && <span className="o-error">Importer is required</span>}
					</li>

					<li>
						<label for="">Entry Type</label>
						<input
							type="text"
							{...register('entry-type', {
								required: true
							})}/>
						{errors['entry-type'] && <span className="o-error">Entry type is required</span>}
					</li>

					<li>
						<label for="">Port</label>
						<input
							type="text"
							{...register('port', {
								required: true
							})}
						/>
						{errors['port'] && <span className="o-error">Port is required</span>}
					</li>

					<li>
						<label for="">Manufacturer</label>
						<input
							type="text"
							{...register('manufacturer', {
								required: true
							})}
						/>
						{errors['manufacturer'] && <span className="o-error">Manufacturer is required</span>}
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
