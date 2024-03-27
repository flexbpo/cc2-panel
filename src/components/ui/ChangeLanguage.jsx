'use client'

import {usePathname, useRouter} from "next/navigation";
import {useLocale} from "next-intl";
import {languageStore} from "@/store/language.store";
import Image from "next/image";
import us from "../../../public/images/flags/us.svg"
import mx from "../../../public/images/flags/mx.svg"
import {Icons} from "@/components/ui/Icons";

export const ChangeLanguage = () => {
	const router = useRouter();
	const localActive = useLocale();
	const pathname = usePathname();
	const setLanguage = languageStore(state => state.changeLanguage)

	const selectLanguage = (nextLocale) => {
		router.replace(`/${pathname.replace('/en', nextLocale).replace('/es', nextLocale)}`)
		setLanguage(nextLocale);
	}

	console.log({localActive})

	return (
		<div className="group/language relative">
			<button
				className="flex items-center gap-1.5 text-slate-500 text-xs font-medium transition-all
					dark:text-white custom-dark:text-white
					group-hover/language:text-primary-500
					dark:group-hover/language:text-primary-500 custom-dark:group-hover/language:text-primary-500">
				<div className="rounded-full relative size-6 border-4 border-white overflow-hidden">
					<Image
						className="absolute top-0 left-0 h-full w-full object-cover max-w-none"
						src={localActive === 'es' ? mx : us}
						alt="United State"
						width="auto"
						height="24"/>
				</div>

				{localActive === 'es' ? 'Es' : 'En'}

				<Icons name="down" className="group-hover/language:rotate-180 transition-[transform]"/>
			</button>

			<ul
				className="shadow py-2 px-1 absolute top-full -left-2 w-full bg-white opacity-0 invisible transition-all rounded
				dark:bg-secondary-750 custom-dark:bg-secondary-750 dark:text-neutral-200 custom-dark:text-neutral-200
				group-hover/language:opacity-100 group-hover/language:visible group-hover/language:left-0">
				<li
					onClick={() => selectLanguage(localActive === 'es' ? 'en' : 'es')}
					className="flex items-center gap-1.5 text-slate-500 text-xs font-medium transition-all hover:cursor-pointer hover:text-primary-500">
					<div className="rounded-full relative size-6 border-4 border-white overflow-hidden">
						<Image
							className="absolute top-0 left-0 h-full w-full object-cover max-w-none"
							src={localActive === 'es' ? us : mx}
							alt="United State"
							width="auto"
							height="24"/>
					</div>

					{localActive === 'es' ? 'En' : 'Es'}
				</li>
			</ul>
		</div>
	)
}
