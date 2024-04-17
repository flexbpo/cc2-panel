import {auth} from "@/auth";
import {redirect} from "next/navigation";
import {AsideMenu} from "@/components/template/AsideMenu";
import {HeaderAuthenticated} from "@/components/template/HeaderAuthenticated";
import {DrawerQuickEntry} from "@/components/quickEntry/DrawerQuickEntry";
import {DrawerConveyance} from "@/components/conveyance/DrawerConveyance";
import {DrawerSeals} from "@/components/conveyance/DrawerSeals";

export const metadata = {
	title: "CC Connect",
	description: "CC Connect",
};

export default async function RootLayout({children}) {
	//Este código es para redireccionar al login cuando no se esta autenticado
	const session = await auth();
	//if(!session?.user) redirect("/login")

	return (
		<main className="flex h-full lg:gap-3">
			<AsideMenu/>

			<div className="flex flex-col gap-4 w-full">
				<HeaderAuthenticated/>

				<div className="px-4 lg:px-0">
					<div className="bg-slate-50 dark:bg-secondary-700 custom-dark:bg-secondary-700 rounded-[15px] px-4 py-5 min-h-[calc(100svh-98px)]">
						{children}
					</div>
				</div>
			</div>

			<DrawerQuickEntry/>

			<DrawerConveyance/>

			<DrawerSeals/>
		</main>
	);
}
