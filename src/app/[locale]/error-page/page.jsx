'use client'

import {useTranslations} from "next-intl";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function ErrorPage({params}) {
	const t = useTranslations('NotFoundPage');
	const router = useRouter();

	return (
		<>
			<h1>{t("title")}</h1>
			<button onClick={() => router.back()}>Back</button>
		</>
	)
}
