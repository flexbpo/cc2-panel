import {create} from "zustand";
import {persist} from "zustand/middleware";

export const languageStore = create(
	persist(
		(set) =>({
			language: 'en',
			changeLanguage : value => set(state => ({language: value}))
		}), {
			name: 'language'
		}
	)
)
