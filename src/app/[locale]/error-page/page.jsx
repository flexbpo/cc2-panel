'use client'

import {useTranslations} from "next-intl";
import {useRouter} from "next/navigation";

export default function ErrorPage() {
	const t = useTranslations('NotFoundPage');
	const router = useRouter();

	return (
		<>
			<h1>{t("title")}</h1>
			<button onClick={() => router.back()}>Back</button>
		</>
	)
}
