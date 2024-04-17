import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useDrawersStore = create(
	persist(
		(set) =>({
			drawerQuickEntry: false,
			drawerConveyance: false,
			drawerConveyanceSeals: false,
			idConveyance: '',
			conveyanceSeals: [],
			showDrawerQuickEntry: () => set(state => ({drawerQuickEntry: !state.drawerQuickEntry})),
			showDrawerConveyance: () => set(state => ({drawerConveyance: !state.drawerConveyance})),
			showDrawerConveyanceSeals: () => set(state => ({drawerConveyanceSeals: !state.drawerConveyanceSeals})),
			setIdConveyance: value => set(state => ({idConveyance: value})),
			setConveyanceSeals: value => set(state => ({conveyanceSeals: value})),
		}), {
			name: 'DrawerQuickEntry'
		}
	)
)
