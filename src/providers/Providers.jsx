

import {NextIntlClientProvider, useMessages} from "next-intl";
import {ReactQuery} from "@/providers/ReactQuery";
import {Themes} from "@/providers/Themes";

export const Providers = ({children, locale}) => {
	const messages = useMessages();

	return (
		<ReactQuery>
			<Themes>
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
			</Themes>
		</ReactQuery>
	)
}
