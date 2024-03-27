'use client'

import { useSearchParams } from "next/navigation";
import { useThemesStore } from "@/store/themes.store";

export const Colors = () => {
	const searchParams = useSearchParams()
	const id = searchParams.get('idTheme');

	if (id === null) return null;

	const themeInfo = useThemesStore(state => state.themeInfo);

	return (
		<>
			<style global jsx>{`
				html[class*="custom"]:root {
					--primary-500: ${themeInfo?.css?.['primary-500']};
					--primary-450: ${themeInfo?.css?.['primary-450']};
					--primary-400: ${themeInfo?.css?.['primary-400']};
					--secondary-400: ${themeInfo?.css?.['secondary-400']};
					--secondary-700: ${themeInfo?.css?.['secondary-700']};
					--secondary-750: ${themeInfo?.css?.['secondary-750']};
					--secondary-800: ${themeInfo?.css?.['secondary-800']};
				}
			`}</style>
		</>
	)
}
