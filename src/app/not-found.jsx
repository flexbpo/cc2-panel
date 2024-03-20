'use client'

import {useRouter} from "next/navigation";
import {languageStore} from "@/store/language.store";

export default function NotFoundPage() {
	const language = languageStore(store => store.language);
	const router = useRouter()

	router.push(`/${language}/error-page`)
}
