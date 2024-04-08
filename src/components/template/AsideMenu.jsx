'use client'

import Image from "next/image"
import Link from "next/link"
import SimpleBar from "simplebar-react"
import {CustomDropdownMenu} from "@/components/ui"
import {Icons} from "@/components/ui"
import {useEffect, useState} from "react"
import {useMenusStore} from "@/store/menus.store"
import {useTheme} from "next-themes"
import {useThemesStore} from "@/store/themes.store";
import {useTranslations} from "next-intl";

export const AsideMenu = () => {
	const menuCollapse = useMenusStore(state => state.menuCollapse)
	const menuMobile = useMenusStore(state => state.menuMobile)
	const changeMenuCollapse = useMenusStore(state => state.changeMenuCollapse)
	const changeMenuMobile = useMenusStore(state => state.changeMenuMobile)
	const {resolvedTheme} = useTheme()
	const [logo, setLogo] = useState('https://fakeimg.pl/144x36/ff0000,0/000,0')
	const themeInfo = useThemesStore(state => state.themeInfo);

	useEffect(() => {
		switch (resolvedTheme) {
			case 'light':
				setLogo('/images/custom-city.svg')
				break
			case 'dark':
				setLogo('/images/custom-city-blue.svg')
				break
			case 'custom':
				setLogo(themeInfo?.logo)
				break
			case 'custom-dark':
				setLogo(themeInfo?.logoBlack)
				break
		}
	}, [resolvedTheme, themeInfo]);

	return (
		<aside
			className={`bg-custom-primary-primary-500 relative z-50 
				${menuCollapse ? 'group isMenuCollapse' : ''}`}>
			<nav
				className={`bg-gradient-to-b from-primary-500 to-primary-400 rounded-br rounded-tr min-h-svh fixed top-0 left-0t transition-all w-[221px]
					dark:from-secondary-700 dark:to-secondary-800 custom-dark:from-secondary-700 custom-dark:to-secondary-800
					${menuMobile ? 'left-0' : 'left-[-221px] lg:left-0'}
					lg:min-h-[calc(100svh-40px)] lg:rounded-lg lg:relative lg:group-[.isMenuCollapse]:w-[63px]`}>
				<div
					className="flex items-center justify-center gap-6 pt-6 pr-3 pb-5 pl-4 h-20
					lg:group-[.isMenuCollapse]:pl-3">
					<Link
						href="/dashboard"
						className="lg:group-[.isMenuCollapse]:hidden">
						<Image src={logo} alt="Custom city" width="144" height="36"/>
					</Link>

					<button
						className="hidden
							lg:block
							group-[.isMenuCollapse]:rotate-180 group/button" onClick={() => changeMenuCollapse()}>
						<Icons
							name="collapse-left"
							className="text-white transition-all duration-300 hidden text-[20px]
							dark:text-secondary-400
							lg:block
							group-hover/button:-translate-x-1"/>
					</button>

					<button
						className="block
							lg:hidden"
						onClick={() => changeMenuMobile()}>
						<Icons
							name="close"
							className="text-white transition-all duration-300 block
								dark:text-secondary-400"/>
					</button>
				</div>

				{!menuCollapse
					? <SimpleBar className="h-full max-h-[calc(100svh-80px)] lg:max-h-[calc(100svh-120px)]">
						<MenuContent/>
					</SimpleBar>
					: <MenuContent/>}
			</nav>
		</aside>
	)
}

const MenuContent = () => {
	const t = useTranslations('AsideMenu');

	const itemsMenu = [
		{
			name: 'US Trip',
			link: '/'
		},
		{
			name: 'US Shipments',
			link: '/'
		},
		{
			name: 'CA Trip',
			link: '/'
		},
		{
			name: 'CA RNS',
			link: '/'
		},
		{
			name: 'CA Status Query',
			link: '/'
		}
	]

	return (
		<div className="pl-3 pr-2.5">
			<CustomDropdownMenu
				icon="air"
				title="General"
				items={itemsMenu}/>

			<Separator title={t('Operations')}/>

			<CustomDropdownMenu
				icon="ocean"
				title="Ocean"
				items={itemsMenu}/>

			<CustomDropdownMenu
				icon="air"
				title="Air"
				items={itemsMenu}/>

			<CustomDropdownMenu
				icon="abi"
				title="ABI"
				items={itemsMenu}/>

			<CustomDropdownMenu
				icon="truck"
				title="Truck"
				items={itemsMenu}/>

			<Separator title={t('Organizations')}/>

			<CustomDropdownMenu
				icon="organization"
				title="Organizations"
				items={itemsMenu}/>

			<CustomDropdownMenu
				icon="support"
				title="Support"
				items={itemsMenu}/>

			<CustomDropdownMenu
				icon="reports"
				title="Reports"
				items={itemsMenu}/>
		</div>
	)
}

const Separator = ({title}) => {
	const menuCollapse = useMenusStore(state => state.menuCollapse);

	return (
		<>
			<p className={`${menuCollapse ? 'lg:hidden' : ''} text-white/40 dark:text-slate-500 py-2.5 text-[13px] font-bold block`}>
				{title}
			</p>
			<hr className={`hidden ${menuCollapse ? 'lg:block' : ''} border-sky-100/40 my-5 w-9 mx-auto`}/>
		</>
	)
}
