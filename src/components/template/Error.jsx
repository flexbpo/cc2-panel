'use client'

import {useTranslations} from "next-intl";

export const Error = () => {
	const t = useTranslations("NotFoundPage");

	return (
		<h1>{t('title')}</h1>
	)
}
