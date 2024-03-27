'use client'

import {Icons} from "@/components/ui/Icons";
import {useMenusStore} from "@/store/menus.store";

export const ButtonMenuMobile = () => {
	const changeMenuMobile = useMenusStore(state => state.changeMenuMobile);

	return (
		<button className="block" onClick={() => changeMenuMobile()}>
			<Icons name="air"/>
		</button>
	)
}
