import {useTranslations} from "next-intl";
import {auth} from "@/auth";
import {redirect} from "next/navigation";
import {ButtonLogout} from "@/components/ui/ButtonLogout";
import {AsideMenu} from "@/components/template/AsideMenu";

export const metadata = {
	title: "CC Connect",
	description: "CC Connect",
};

export default async function RootLayout({children}) {
	//Este código es para redireccionar al login cuando no se esta autenticado
	const session = await auth();
	if(!session?.user) redirect("/login")

	return (
		<main>
			<AsideMenu/>
			<ButtonLogout/>
			<h2>Dashboard</h2>
			{children}
		</main>
	);
}
