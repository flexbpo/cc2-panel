'use client';

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Icons} from "@/components/ui/Icons";
import {useSearchParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {getThemeByID} from "@/services/themes.api";
import {useThemesStore} from "@/store/themes.store";

export const ChangeTheme = () => {
	const [mounted, setMounted] = useState(false);
	const {theme:currentTheme, setTheme} = useTheme();
	const addInfoTheme = useThemesStore(state => state.addInfoTheme)

	const searchParams = useSearchParams()
	const themeID = searchParams.get('idTheme');

	const {data} = useQuery({
		queryKey: ["ThemeID"],
		queryFn: async () => await getThemeByID(themeID)
	});

	useEffect(() => {
		if (themeID !== null && data?.error !== 'Not Found') {
			addInfoTheme(data);
			if ((currentTheme === 'light' || currentTheme === 'custom') && currentTheme !== 'custom') {
				setTheme('custom');
			}
			if ((currentTheme === 'dark' || currentTheme === 'custom-dark') && currentTheme !== 'custom-dark') {
				setTheme('custom-dark');
			}
		}

		if (themeID === null || data?.error === 'Not Found') {
			addInfoTheme({});
			if ((currentTheme === 'light' || currentTheme === 'custom') && currentTheme !== 'light') {
				setTheme('light');
			}
			if ((currentTheme === 'dark' || currentTheme === 'custom-dark') && currentTheme !== 'dark') {
				setTheme('dark');
			}
		}
	}, [themeID, data]);

	/*if(themeID !== null && data?.error !== 'Not Found'){
		addInfoTheme(data);
		if (theme === 'light' || theme === 'custom') setTheme('custom');
		if (theme === 'dark' || theme === 'custom-dark') setTheme('custom-dark');
	}

	if(themeID === null || data?.error === 'Not Found') {
		addInfoTheme({});
		if (theme === 'light' || theme === 'custom') setTheme('light');
		if (theme === 'dark' || theme === 'custom-dark') setTheme('dark');
	}*/

	useEffect(() => {
		setMounted(true);
	}, [])

	if (!mounted) return null

	return (
		<>
			{currentTheme === 'light' || currentTheme === 'custom'
				? <button
					onClick={() => setTheme(currentTheme === 'custom' ? 'custom-dark' : 'dark')}
					className="text-black transition-all
					dark:text-white
					dark:hover:text-primary-500
					custom-dark:text-white
					custom-dark:hover:text-primary-500
					hover:text-primary-500">
					<Icons name="dark-mode"/>
				</button>
				: null}

			{currentTheme === 'dark' || currentTheme === 'custom-dark'
				? <button
					onClick={() => setTheme(currentTheme === 'custom-dark' ? 'custom' : 'light')}
					className="text-black transition-all
					dark:text-white
					dark:hover:text-primary-500
					custom-dark:text-white
					custom-dark:hover:text-primary-500
					hover:text-primary-500">
					<Icons name="light-mode"/>
				</button>
				: null}
		</>
	)
}
