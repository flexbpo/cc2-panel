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
	const {theme, setTheme} = useTheme();
	const addInfoTheme = useThemesStore(state => state.addInfoTheme)

	const searchParams = useSearchParams()
	const themeID = searchParams.get('idTheme');

	const {data} = useQuery({
		queryKey: ["ThemeID"],
		queryFn: async () => await getThemeByID(themeID)
	});

	if(themeID !== null && data?.error !== 'Not Found'){
		addInfoTheme(data);
		if (theme === 'light' || theme === 'custom') setTheme('custom');
		if (theme === 'dark' || theme === 'custom-dark') setTheme('custom-dark');
	}

	if(themeID === null || data?.error === 'Not Found') {
		addInfoTheme({});
		if (theme === 'light' || theme === 'custom') setTheme('light');
		if (theme === 'dark' || theme === 'custom-dark') setTheme('dark');
	}

	useEffect(() => {
		setMounted(true);
	}, [])

	if (!mounted) return null

	return (
		<>
			{theme === 'light' || theme === 'custom'
				? <button
					onClick={() => setTheme(theme === 'custom' ? 'custom-dark' : 'dark')}
					className="text-black transition-all
					dark:text-white
					dark:hover:text-primary-500
					custom-dark:text-white
					custom-dark:hover:text-primary-500
					hover:text-primary-500">
					<Icons name="dark"/>
				</button>
				: null}

			{theme === 'dark' || theme === 'custom-dark'
				? <button
					onClick={() => setTheme(theme === 'custom-dark' ? 'custom' : 'light')}
					className="text-black transition-all
					dark:text-white
					dark:hover:text-primary-500
					custom-dark:text-white
					custom-dark:hover:text-primary-500
					hover:text-primary-500">
					<Icons name="light"/>
				</button>
				: null}
		</>
	)
}
