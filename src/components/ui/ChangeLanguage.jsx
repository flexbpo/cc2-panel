'use client'

import {usePathname, useRouter} from "next/navigation";
import {useLocale} from "next-intl";
import {languageStore} from "@/store/language.store";

export const ChangeLanguage = ({locale}) => {
	const router = useRouter();
	const localActive = useLocale();
	const pathname = usePathname();
	const setLanguage = languageStore(state => state.changeLanguage)

	const selectLanguage = (event) => {
		const nextLocale = event.target.value;
		router.replace(`/${pathname.replace('/en', nextLocale).replace('/es', nextLocale)}`)
		setLanguage(nextLocale);
	}

	return (
		<select
			defaultValue={localActive}
			name="languaje"
			id="languaje"
			onChange={selectLanguage}
			className="bg-black">
			<option value="es">ES</option>
			<option value="en">EN</option>
		</select>
	)
}
