import {Icons} from "@/components/ui/Icons";

export const DropdownCustomCity = () => {
	return (
		<div className="group/dropdownCustomCity relative text-xs">
			<button className="bg-white py-1.5 px-2.5 rounded gap-12 flex items-center font-bold text-slate-400
				group-hover/dropdownCustomCity:text-primary-500
				dark:bg-secondary-750 dark:text-neutral-200
				custom-dark:bg-secondary-750 custom-dark:text-neutral-200
				dark:group-hover/dropdownCustomCity:text-primary-500
				custom-dark:group-hover/dropdownCustomCity:text-primary-500
				">
				CustomCity

				<Icons name="down" className="text-[18px] group-hover/dropdownCustomCity:rotate-180 transition-all"/>
			</button>

			<ul
				className="bg-white text-neutral-400 opacity-0 invisible -left-2 transition-all absolute top-full w-full rounded overflow-hidden shadow
				dark:bg-secondary-750 custom-dark:bg-secondary-700 dark:text-neutral-200 custom-dark:text-neutral-200
				group-hover/dropdownCustomCity:opacity-100 group-hover/dropdownCustomCity:visible group-hover/dropdownCustomCity:left-0">
				<li>
					<a className="py-1 block px-2 transition-all hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 custom-dark:hover:bg-primary-500" href="#">
						CustomCity 2
					</a>
				</li>
				<li>
					<a className="py-1 block px-2 transition-all hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 custom-dark:hover:bg-primary-500" href="#">
						CustomCity 3
					</a>
				</li>
				<li>
					<a className="py-1 block px-2 transition-all hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 custom-dark:hover:bg-primary-500" href="#">
						CustomCity 4
					</a>
				</li>
			</ul>
		</div>
	)
}
