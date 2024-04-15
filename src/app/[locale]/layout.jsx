import {Providers} from "@/providers/Providers"
import {ccIcons, circularStd} from "@/hooks/localFonts"
import "@/css/globals.css"
import 'simplebar-react/dist/simplebar.min.css'
import {Colors} from "@/components/template/Colors";
import {unstable_setRequestLocale} from "next-intl/server";
import {Toaster} from "sonner";

export const metadata = {
	title: "CC Connect",
	description: "CC Connect",
}

export default async function RootLayout({ children, params: {locale} }) {
	unstable_setRequestLocale(locale);

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${circularStd.className} ${circularStd.variable} ${ccIcons.variable}`}>
				<Providers locale={locale}>
					<Toaster position="top-center" richColors/>
					<Colors/>
					{children}
				</Providers>
			</body>
		</html>
	);
}
