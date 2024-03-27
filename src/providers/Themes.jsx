import {ThemeProvider} from "next-themes";

export const Themes = ({children}) => {
	return (
		<ThemeProvider
			themes={['dark', 'light', 'custom', 'custom-dark']}
			attribute="class"
			enableSystem={false}>
			{children}
		</ThemeProvider>
	)
}
