import Image from "next/image";
import profile from '../../../public/images/header/profile.svg'
import {Icons} from "@/components/ui/Icons";
import Link from "next/link";

export const DropDownProfile = () => {
	return (
		<div className="group/dropDownProfile relative">
			<button
				className="flex items-center gap-1.5 text-slate-500 text-xs font-medium transition-all
					group-hover/dropDownProfile:text-primary-500
					dark:text-white custom-dark:text-white">
				<div className="rounded-full relative size-8 border-2 border-primary-500 overflow-hidden">
					<Image
						className="absolute top-0 left-0 h-full w-full object-cover max-w-none"
						src={profile}
						alt="United State"
						width="auto"
						height="30"/>
				</div>

				<span className="hidden lg:block whitespace-nowrap">Jack Alex</span>

				<Icons name="down" className="group-hover/dropDownProfile:rotate-180 transition-transform"/>
			</button>

			<ul className="min-w-[100px] w-full text-xs rounded overflow-hidden bg-white text-neutral-400 opacity-0 invisible -right-3 transition-all absolute top-full shadow
				dark:bg-secondary-750 custom-dark:bg-secondary-750 dark:text-neutral-200 custom-dark:text-neutral-200
				group-hover/dropDownProfile:opacity-100 group-hover/dropDownProfile:visible group-hover/dropDownProfile:right-0">
				<li>
					<Link
						className="text-wrap py-1 block px-2 transition-all hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 custom-dark:bg-primary-500"
						href="/">
						Item 1
					</Link>
				</li>
				<li>
					<Link
						className="text-wrap py-1 block px-2 transition-all hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 custom-dark:bg-primary-500"
						href="/">
						Item 2
					</Link>
				</li>
				<li>
					<Link
						className="text-wrap py-1 block px-2 transition-all hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 custom-dark:bg-primary-500"
						href="/">
						Item 3
					</Link>
				</li>
				<li>
					<Link
						className="text-wrap py-1 block px-2 transition-all hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 custom-dark:bg-primary-500"
						href="/">
						Item 4
					</Link>
				</li>
			</ul>
		</div>
	)
}
