import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useThemesStore = create(
	persist(
		(set) =>({
			themeInfo: {},
			addInfoTheme: value => set(() => ({themeInfo: value})),
		}), {
			name: 'themes'
		}
	)
)
