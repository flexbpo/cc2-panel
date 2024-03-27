import {NextResponse} from "next/server";

export async function GET(request, context) {
	const {params} = context;

	if(params.id === '6'){
		return NextResponse.json({
			logo: 'https://fakeimg.pl/144x36/',
			logoBlack: 'https://fakeimg.pl/144x36/',
			logoIcon: 'https://fakeimg.pl/30x30/',
			css: {
				"primary-500": "#d97706",
				"primary-450": "#f59e0b",
				"primary-400": "#fbbf24",

				"secondary-400": "#7e22ce",
				"secondary-700": "#6b21a8",
				"secondary-750": "#581c87",
				"secondary-800": "#3b0764"
			}
		})
	}

	if(params.id === '12'){
		return NextResponse.json({
			logo: 'https://fakeimg.pl/144x36/',
			logoBlack: 'https://fakeimg.pl/144x36/',
			logoIcon: 'https://fakeimg.pl/30x30/',
			css: {
				"primary-500": "#65a30d",
				"primary-450": "#84cc16",
				"primary-400": "#a3e635",

				"secondary-400": "#4338ca",
				"secondary-700": "#3730a3",
				"secondary-750": "#312e81",
				"secondary-800": "#1e1b4b"
			}
		})
	}

	return NextResponse.json({ error: 'Not Found' }, { status: 400 })
}
