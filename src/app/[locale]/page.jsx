'use client'

import {useTranslations} from "next-intl";
import {Button} from "@/components/ui";

export default function Home() {
	const t = useTranslations('Index');

	return (
		<main className="">
			<h1>{t('title')}</h1>

			<Button label="Sample button"/>
		</main>
	);
}
