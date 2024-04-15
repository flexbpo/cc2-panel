'use client'

import {Icons} from "@/components/ui";
import SimpleBar from "simplebar-react";

export const State = ({title, icon, quantity, textColor, bgColor, borderColor, children}) => {
	return (
		<div className="h-full">
			<h3 className={`${bgColor} ${textColor} flex justify-between items-center gap-3 font-medium p-4 rounded-tl rounded-tr
				dark:${textColor} dark:bg-secondary-800 custom-dark:bg-secondary-800`}>
				<div
					className="bg-white dark:bg-secondary-750 custom-dark:bg-secondary-750 size-8 rounded-[10px] flex items-center justify-center">
					<Icons name={icon}/>
				</div>

				<span className="flex-1">{title}</span>

				<div
					className={`${borderColor} w-[26px] h-[19px] border rounded-full flex justify-center items-center text-[11px] font-medium`}>
					{quantity}
				</div>
			</h3>

			<SimpleBar
				className={`${bgColor} lg:h-[calc(100%-64px)] dark:bg-secondary-800 custom-dark:bg-secondary-800 p-4 rounded-bl rounded-br`}>
				<div className="grid grid-cols-1 gap-5">
					{children}
				</div>
			</SimpleBar>
		</div>
	)
}
