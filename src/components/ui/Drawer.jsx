import {Icons} from "@/components/ui/Icons";

export const Drawer = ({children, title, icon, show, setShow}) => {
	return (
		<>
			<div className={`top-0 left-0 z-50 fixed w-svw h-svh bg-black/30 dark:bg-black/70 custom-dark:bg-black/70 transition-all
				${show ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
					<div
						className={`rounded-tr-[34px] rounded-tl-[34px] bg-white dark:bg-secondary-800 custom-dark:bg-secondary-800 h-[calc(100svh-16px)] right-0 fixed w-full shadow pt-20 px-8 lg:px-14 transition-all delay-150
							lg:top-0  lg:max-w-[480px] lg:h-svh lg:rounded-none
							${show ? 'opacity-100 visible lg:right-0 bottom-0' : 'lg:-right-full -bottom-full opacity-0 invisible'}
							`}>
						<button onClick={() => setShow()} className="absolute lg:right-9 lg:top-9 right-6 top-6 transition-all hover:-translate-y-1 dark:text-white custom-dark:text-white hover:text-primary-500 dark:hover:text-primary-500 custom-dark:hover:text-primary-500">
							<Icons name="air"/>
						</button>

						<h2 className="flex gap-4 font-medium text-[22px] lg:text-xl mb-8 capitalize dark:text-white custom-dark:text-white">
							<Icons name={icon}/> {title}
						</h2>

						{children}
					</div>
				</div>
		</>
	)
}
