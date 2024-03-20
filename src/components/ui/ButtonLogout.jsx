'use client'

import {logout} from "@/app/lib/actions";

export const ButtonLogout = () => {
	return (
		<button onClick={() => logout()}>
			Logout
		</button>
	)
}
