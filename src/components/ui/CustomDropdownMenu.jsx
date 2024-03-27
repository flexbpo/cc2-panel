'use client'

import {Icons} from "@/components/ui/Icons";
import Link from "next/link";
import {useState} from "react";
import {useMenusStore} from "@/store/menus.store";

export const CustomDropdownMenu = ({icon, title, items}) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const menuCollapse = useMenusStore(state => state.menuCollapse);

	return (
		<div className={`group/dropdown ${menuCollapse ? 'relative' : ''}`}>
			<button
				onClick={() => setDropdownOpen(dropdown => !dropdown)}
				className={`peer text-white text-sm transition-all flex justify-center items-center w-full gap-3.5 rounded
				${menuCollapse 
					? `py-2 ${icon === 'organization' || icon === 'support' || icon === 'reports' ? 'px-1 mx-auto' : 'px-2.5'}` : 'p-2 pr-3'} 
					dark:text-primary-500
					custom-dark:text-primary-500
					hover:bg-white/20 
					dark:hover:bg-primary-500 dark:hover:text-white
					custom-dark:hover:bg-primary-500 custom-dark:hover:text-white`}>

				{icon === 'organization' || icon === 'support' || icon === 'reports'
					? <>
						<div className="size-6 bg-white/10 rounded">
							<Icons name={icon} className="text-[10px]"/>
						</div>
					</>
					: <Icons name={icon} className="text-xl"/>
				}

				<span className={`flex-1 text-left ${menuCollapse ? 'lg:hidden' : ''}`}>{title}</span>
				<Icons name="down" className={`transition-transform ${menuCollapse ? 'lg:hidden' : ''} ${dropdownOpen && !menuCollapse ? 'rotate-180' : 'rotate-0'}`}/>
			</button>

			<div
				className={`grid transition-[grid-template-rows] duration-500
					${menuCollapse 
						? 'absolute left-[100%] pl-2.5 top-0 invisible opacity-0 transition-all duration-300 group-hover/dropdown:visible group-hover/dropdown:opacity-100' 
						: ''}
					${dropdownOpen && !menuCollapse ? 'grid-rows-auto' : 'grid-rows-0'}`}>
				<ul
					className={`grid gap-1 text-[11px] transition  
						${!menuCollapse 
							? 'overflow-hidden pl-9' 
							: `bg-gradient-to-b bg-primary-500 from-primary-500 to-primary-400 w-[150px] rounded
								dark:from-secondary-700 dark:to-secondary-800
								custom-dark:from-secondary-700 custom-dark:to-secondary-800
								`}`}>
					{items.map((item, index) => (
						<li key={index}>
							<Link
								className="p-1 pl-2 transition block w-full rounded text-white dark:text-primary-500
									hover:bg-white/20
									dark:hover:bg-primary-500 dark:hover:text-white
									custom-dark:hover:bg-primary-500 custom-dark:hover:text-white"
								href={item.link}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
