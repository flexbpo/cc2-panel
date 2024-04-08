'use client'

import {SimpleAutoComplete} from "@/components/forms/SimpleAutoComplete";
import {getArrivalPort} from "@/services/arrival-port.api";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
	organization: z.string().min(1, {
		message: 'Search is required'
	})
})

const defaultValues = {
	organization: ''
}

export const DropdownCustomCity = () => {
	const {control, handleSubmit} = useForm({
		defaultValues,
		resolver:zodResolver(schema),
		mode: "onChange"
	});

	const onSubmit = values => console.log(values);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="relative">
			<SimpleAutoComplete
				control={control}
				name="organization"
				getItems={getArrivalPort}
				className="border-transparent h-[30px]"
				placeholder="Organization"
				errorsVisible={false}
				selectedValue={(item) => `${item.name} - ${item.code}`}>
				{(item) => (
					<>
						<span>{item.name}</span> - <span>{item.code}</span>
					</>
				)}
			</SimpleAutoComplete>
		</form>
	)
}
