/** @type { import('@storybook/react').Preview } */
import '../src/css/globals.css';
import localFont from "next/font/local";
import {themes} from '@storybook/theming';

export const circularStd = localFont({
	src: [
		{
			path: '../fonts/CircularStd-Black.woff2',
			weight: '900',
			style: 'normal'
		},
		{
			path:  '../fonts/CircularStd-BlackItalic.woff2',
			weight: '900',
			style: 'italic'
		},
		{
			path: '../fonts/CircularStd-Bold.woff2',
			weight: '700',
			style: 'normal'
		},
		{
			path: '../fonts/CircularStd-BoldItalic.woff2',
			weight: '700',
			style: 'italic'
		},
		{
			path: '../fonts/CircularStd-Book.woff2',
			weight: '450',
			style: 'normal'
		},
		{
			path: '../fonts/CircularStd-BookItalic.woff2',
			weight: '450',
			style: 'italic'
		},
		{
			path: '../fonts/CircularStd-Medium.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../fonts/CircularStd-MediumItalic.woff2',
			weight: '500',
			style: 'italic'
		}
	],
	display: 'swap',
	variable: '--font-circular-std'
});

export const ccIcons = localFont({
	src: '../fonts/cc-icons.woff',
	display: 'swap',
	variable: '--font-cc-icons'
});


const preview = {
	parameters: {

		classTarget: 'html',
		darkMode: {
			// Override the default dark theme
			dark: { ...themes.dark },

			// Override the default light theme
			light: { ...themes.normal },
			stylePreview: true
		}
	},
	decorators: [
		Story => (
			<div className={`${circularStd.className} ${circularStd.variable} ${ccIcons.variable}`}>
				<Story/>
			</div>
		)
	],
};

export default preview;
