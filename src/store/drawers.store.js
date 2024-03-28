import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useDrawersStore = create(
	persist(
		(set) =>({
			drawerQuickEntry: false,
			showDrawerQuickEntry: () => set(state => ({drawerQuickEntry: !state.drawerQuickEntry})),
		}), {
			name: 'DrawerQuickEntry'
		}
	)
)
