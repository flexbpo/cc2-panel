import {NextIntlClientProvider, useMessages} from "next-intl";
import {ThemeProvider} from "next-themes";
import {ReactQuery} from "@/providers/ReactQuery";



export const Providers = ({children, locale}) => {
	const messages = useMessages();

	return (
		<ReactQuery>
			<ThemeProvider attribute="class" enableSystem={true}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
			</ThemeProvider>
		</ReactQuery>
	)
}
