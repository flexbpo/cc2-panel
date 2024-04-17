import {NextResponse} from "next/server";
import {dataConveyance} from "@/app/api/conveyance/route";

export async function GET(request, context) {
	const { params } = context;

	if (params.id) {
		const filteredData = dataConveyance.filter(item => item.id === parseInt(params.id));

		if (filteredData.length > 0) {
			return NextResponse.json({ data: filteredData });
		}

		if (filteredData.length === 0) {
			return NextResponse.json({ error: 'Not Found' }, { status: 404 });
		}
	}

	return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
}
