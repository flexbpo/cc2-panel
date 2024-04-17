'use client'

import {DrawerWithoutBG} from "@/components/ui/DrawerWithoutBG";
import {useDrawersStore} from "@/store/drawers.store";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useState} from "react";
import {InputTags} from "@/components/forms/InputTags";
import {Checkbox} from "@/components/forms/Checkbox";
import {CustomSelect} from "@/components/forms/CustomSelect";
import {salesValidation} from "@/hooks/validations/salesValidation";
import {toast} from "sonner";

export const DrawerSeals = () => {
	const drawerConveyanceSeals = useDrawersStore(state => state.drawerConveyanceSeals)
	const showDrawerConveyanceSeals = useDrawersStore(store => store.showDrawerConveyanceSeals)
	const setConveyanceSeals = useDrawersStore(store => store.setConveyanceSeals)
	const conveyanceSeals = useDrawersStore(store => store.conveyanceSeals)

	const defaultVal = {
		seals: conveyanceSeals,
		iit: false,
		iitType: ''
	}

	const [values, setValues] = useState(defaultVal)

	const {
		control,
		setValue,
		handleSubmit,
		reset,
		watch,
		formState: {errors}} = useForm({
			defaultValues: defaultVal,
			values,
			resolver: yupResolver(salesValidation()),
			mode: "onChange"
		})

	const onSubmit = values => {
		toast.success('Seals Submitted!')
		showDrawerConveyanceSeals()
	}

	const onReset = async values => {
		setConveyanceSeals([])
		showDrawerConveyanceSeals()
		reset(defaultVal)
	}

	return (
		<DrawerWithoutBG title='Seals an IT Info' show={drawerConveyanceSeals} setShow={() => showDrawerConveyanceSeals()}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ul className="flex flex-wrap gap-x-2.5 gap-y-3">
					<li className="w-full">
						<InputTags
							tagsDefault={conveyanceSeals}
							label="Seals"
							maxTags={4}
							onTagsChange={values => {
								setValue('seals', values)
								setConveyanceSeals(values)
							}}
						/>
					</li>

					<li>
						<Checkbox
							label="IIT"
							control={control}
							name="iit"/>
					</li>

					<li className="flex-1">
						{watch('iit') ? <CustomSelect
							name="iitType"
							label="IIT Type"
							control={control}
							options={[
								{value: "Carrier Bond (empty)", label: "Carrier Bond (empty)"},
								{value: "Importer Bond (empty)", label: "Importer Bond (empty)"},
								{value: "Carrier Bond (loaded)", label: "Carrier Bond (loaded)"},
								{value: "Importer Bond (loaded)", label: "Importer Bond (loaded)"},
							]}/> : null}
					</li>
				</ul>

				<div className="flex items-center gap-6 mt-4">
					<button type="submit" className="o-button">
						<span>Save Seals</span>
					</button>

					<button
						type="button"
						className="underline text-primary-500 hover:-translate-y-1 hover:text-primary-400 transition-all"
						onClick={onReset}>
						Cancel
					</button>
				</div>
			</form>
		</DrawerWithoutBG>
	)
}
