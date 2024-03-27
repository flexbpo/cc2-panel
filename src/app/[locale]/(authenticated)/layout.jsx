import {auth} from "@/auth";
import {redirect} from "next/navigation";
import {AsideMenu} from "@/components/template/AsideMenu";
import {HeaderAuthenticated} from "@/components/template/HeaderAuthenticated";

export const metadata = {
	title: "CC Connect",
	description: "CC Connect",
};

export default async function RootLayout({children}) {
	//Este código es para redireccionar al login cuando no se esta autenticado
	const session = await auth();
	if(!session?.user) redirect("/login")

	return (
		<main className="flex h-full lg:gap-3">
			<AsideMenu/>

			<div className="flex flex-col gap-4 w-full">
				<HeaderAuthenticated/>

				<div className="bg-slate-50 dark:bg-zinc-700 rounded px-4 py-5">
					{children}
				</div>
			</div>
		</main>
	);
}
