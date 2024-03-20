import {Providers} from "@/providers/Providers"
import {ChangeLanguage} from "@/components"
import {circularStd} from "@/hooks/localFonts"
import "@/css/globals.css"
import {ChangeTheme} from "@/components/ui/ChangeTheme";

export const metadata = {
	title: "CC Connect",
	description: "CC Connect",
}

export default async function RootLayout({ children, params: {locale} }) {
	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${circularStd.className} ${circularStd.variable}`}>
				<Providers locale={locale}>
					<ChangeLanguage/>
					<ChangeTheme/>
					{children}
				</Providers>
			</body>
		</html>
	);
}
