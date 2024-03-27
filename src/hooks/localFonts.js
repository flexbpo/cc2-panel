import localFont from "next/font/local";

export const circularStd = localFont({
	src: [
		{
			path: '../../public/fonts/CircularStd-Black.woff2',
			weight: '900',
			style: 'normal'
		},
		{
			path:  '../../public/fonts/CircularStd-BlackItalic.woff2',
			weight: '900',
			style: 'italic'
		},
		{
			path: '../../public/fonts/CircularStd-Bold.woff2',
			weight: '700',
			style: 'normal'
		},
		{
			path: '../../public/fonts/CircularStd-BoldItalic.woff2',
			weight: '700',
			style: 'italic'
		},
		{
			path: '../../public/fonts/CircularStd-Book.woff2',
			weight: '450',
			style: 'normal'
		},
		{
			path: '../../public/fonts/CircularStd-BookItalic.woff2',
			weight: '450',
			style: 'italic'
		},
		{
			path: '../../public/fonts/CircularStd-Medium.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../../public/fonts/CircularStd-MediumItalic.woff2',
			weight: '500',
			style: 'italic'
		}
	],
	display: 'swap',
	variable: '--font-circular-std'
})

export const ccIcons = localFont({
	src: '../../public/fonts/cc-icons.woff',
	display: 'swap',
	variable: '--font-cc-icons'
});
