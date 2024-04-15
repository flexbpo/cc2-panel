'use client'

import {Icons} from "@/components/ui/Icons";
import {useDrawersStore} from "@/store/drawers.store";

export const DropDownNewEntry = () => {
	const showDrawerQuickEntry = useDrawersStore(store => store.showDrawerQuickEntry)

	return (
		<div className="group/DropDownEntry fixed bottom-8 right-8 lg:bottom-auto lg:right-auto lg:relative z-20">
			<button
				className="hidden lg:block bg-primary-500 text-white text-[13px] rounded overflow-hidden p-0 lg:relative
					before:-translate-x-1/2 before:absolute before:bg-primary-400 before:block before:clip-path-circle-0 before:content-[''] before:h-full before:left-1/2 before:top-0 before:transition-all before:w-full before:z-0
					group-hover/DropDownEntry:-translate-y-0.5 group-hover/DropDownEntry:shadow-lg group-hover/DropDownEntry:before:clip-path-circle-100">
				<span className="py-2 px-4 inline-flex relative">
					New
				</span>

				<span className="py-2 px-1.5 border-l-2 border-black/10 inline-flex relative">
					<Icons name="down"/>
				</span>
			</button>

			<button className="lg:hidden bg-primary-500 rounded-[14px] text-white h-[45px] w-[45px]">
				<Icons name="plus"/>
			</button>

			<div className="opacity-0 invisible block transition-all lg:-translate-x-4
				lg:pt-2.5 lg:mb-0
				group-hover/DropDownEntry:visible group-hover/DropDownEntry:opacity-100 lg:group-hover/DropDownEntry:translate-x-0">
				<ul
					className="min-w-[180px] p-2.5 bg-white absolute bottom-[calc(100%+8px)] right-0 rounded-lg shadow text-blue-950 text-sm
						dark:bg-secondary-750 custom-dark:bg-secondary-750 dark:text-neutral-200 custom-dark:text-neutral-200
						lg:min-w-[200px] lg:top-full lg:bottom-auto">
					<li className="mb-4 text-xs text-secondary-450 px-2">Create</li>
					<li>
						<button
							onClick={() => showDrawerQuickEntry()}
							className="relative whitespace-nowrap py-1.5 px-4 gap-3.5 flex rounded w-full overflow-hidden
							hover:before:w-full
							before:content-[''] before:absolute before:bg-primary-500 before:opacity-10 before:h-full before:w-0 before:top-0 before:left-0 before:transition-all">
							<Icons name="quick-entry"/>

							Quick E-Manifest
						</button>
					</li>
					<li>
						<button className="relative whitespace-nowrap py-1.5 px-4 gap-3.5 flex rounded w-full overflow-hidden
							hover:before:w-full
							before:content-[''] before:absolute before:bg-primary-500 before:opacity-10 before:h-full before:w-0 before:top-0 before:left-0 before:transition-all">
							<Icons name="wizard-view"/>

							Wizard View
						</button>
					</li>
					<li>
						<button className="relative whitespace-nowrap py-1.5 px-4 gap-3.5 flex rounded w-full overflow-hidden
							hover:before:w-full
							before:content-[''] before:absolute before:bg-primary-500 before:opacity-10 before:h-full before:w-0 before:top-0 before:left-0 before:transition-all">
							<Icons name="wizard-view-2"/>

							Table View
						</button>
					</li>
					<li>
						<button className="relative whitespace-nowrap py-1.5 px-4 gap-3.5 flex rounded w-full overflow-hidden
							hover:before:w-full
							before:content-[''] before:absolute before:bg-primary-500 before:opacity-10 before:h-full before:w-0 before:top-0 before:left-0 before:transition-all">
							<Icons name="card-view"/>

							Card View
						</button>
					</li>
					{/*<li>
						<button className="relative whitespace-nowrap py-1.5 px-4 gap-3.5 flex rounded w-full overflow-hidden
							hover:before:w-full
							before:content-[''] before:absolute before:bg-primary-500 before:opacity-10 before:h-full before:w-0 before:top-0 before:left-0 before:transition-all">
							<Icons name="ia"/>

							AI
						</button>
					</li>
					<li>
						<hr className="w-[calc(100%+20px)] -ml-2.5 mt-3"/>
					</li>
					<li>
						<Link
							className="whitespace-nowrap hover:text-primary-500 transition-all pt-4 pb-2 block pl-4"
							href="/">Explore templates</Link>
					</li>*/}
				</ul>
			</div>
		</div>
	)
}
