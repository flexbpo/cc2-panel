import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useMenusStore = create(
	persist(
		(set) =>({
			menuCollapse: false,
			menuMobile: false,
			changeMenuCollapse: () => set(state => ({menuCollapse: !state.menuCollapse})),
			changeMenuMobile: () => set(state => ({menuMobile: !state.menuMobile}))
		}), {
			name: 'menuCollapse'
		}
	)
)
