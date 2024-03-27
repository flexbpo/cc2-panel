'use client'

import Image from "next/image";
import logoIcon from "../../../public/images/custom-city-icon.svg";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {useThemesStore} from "@/store/themes.store";

export const LogoIcon = () => {
	const searchParams = useSearchParams()
	const id = searchParams.get('idTheme');

	const themeInfo = useThemesStore(state => state.themeInfo);

	return (
		<Link href="/" className="flex justify-center items-center size-9 rounded-full bg-primary-500 overflow-hidden">
			<Image src={id === null ? logoIcon : themeInfo?.logoIcon} alt="CustomCity" height="30" width="30"/>
		</Link>
	)
}
