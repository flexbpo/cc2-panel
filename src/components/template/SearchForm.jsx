'use client'

import {useForm} from "react-hook-form";
import {Icons} from "@/components/ui";
import {useTranslations} from "next-intl";

export const SearchForm = () => {
	const t = useTranslations('Search');

	const {
		register,
		handleSubmit,
		formState: {
			errors
		}
	} = useForm();

	const onSubmitSearch = handleSubmit((values) => {
		console.log({values})
	})

	return (
		<form onSubmit={onSubmitSearch} className="relative w-full">
			<input
				className={`h-10 w-full bg-slate-50 border border-slate-50 pl-12 text-xs peer outline-none rounded
					focus:border-primary-500 
					dark:bg-secondary-700 dark:border-secondary-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary-500
					custom-dark:bg-secondary-700 custom-dark:border-secondary-700 custom-dark:text-neutral-200 custom-dark:placeholder:text-neutral-200 custom-dark:focus:border-primary-500
					${errors.search !== undefined ? '!border-red-500 animate-shake-horizontal' : ''}`}
				type="search"
				placeholder={t('placeholder')}
				{...register(
					"search",
					{
						required: true
					}
				)}
			/>

			<Icons
				className={`absolute top-1.5 left-5 text-xl text-slate-500 peer-focus:text-primary-500
					dark:text-neutral-200
					${errors.search !== undefined ? 'text-red-600 dark:text-red-600' : ''}`}
				name="search"/>
		</form>
	)
}
