import {SearchForm} from "@/components/template/SearchForm";
import {ChangeTheme} from "@/components/ui/ChangeTheme";
import {ChangeLanguage} from "@/components";
import {ButtonMenuMobile} from "@/components/ui/ButtonMenuMobile";
import {LogoIcon} from "@/components/template/LogoIcon";
import {DropdownCustomCity} from "@/components/ui/DropdownCustomCity";
import {Notifications} from "@/components/template/Notifications";
import {DropDownProfile} from "@/components/ui/DropDownProfile";
import {ButtonSearch} from "@/components/ui/ButtonSearch";

export const HeaderAuthenticated = () => {
	return (
		<header className="flex gap-4 w-full relative z-10">
			<div className="w-full hidden lg:block">
				<SearchForm/>
			</div>

			<div className="py-4 lg:py-0.5 px-4 flex items-center justify-between w-full bg-transparent lg:bg-slate-50 border border-transparent lg:border-slate-50 rounded gap-4
				lg:dark:bg-secondary-700 lg:dark:border-secondary-700
				custom-dark:bg-secondary-700 custom-dark:border-secondary-700">
				<div className="flex lg:hidden items-center gap-4">
					<LogoIcon/>

					<ButtonMenuMobile/>
				</div>

				<div className="hidden lg:flex items-center justify-center gap-2 xl:gap-8">
					<ChangeLanguage/>

					<DropdownCustomCity/>
				</div>

				<div className="flex gap-7">
					<div className="flex gap-5">
						<div className="flex items-center lg:hidden">
							<ButtonSearch/>
						</div>

						<ChangeTheme/>

						<Notifications/>
					</div>

					<DropDownProfile/>
				</div>
			</div>
		</header>
	)
}
