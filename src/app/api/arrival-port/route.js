import {NextResponse} from "next/server";

export async function GET() {
	return NextResponse.json({
		data: [
			{
				id:1,
				name: 'PORTLAND',
				code: '0101'
			}, {
				id:2,
				name: 'LUBEC',
				code: '0103'
			}, {
				id:3,
				name: 'JACKMAN',
				code: '0104'
			}, {
				id:4,
				name: 'VANCEBORO',
				code: '0105'
			}, {
				id:5,
				name: 'HOULTON',
				code: '0106'
			}, {
				id:6,
				name: 'FORT FAIRFIELD',
				code: '0107'
			}, {
				id:7,
				name: 'VAN BUREN',
				code: '0108'
			}, {
				id:8,
				name: 'MADAWASKA',
				code: '0109'
			}, {
				id:9,
				name: 'FORT KENT',
				code: '0110'
			}, {
				id:10,
				name: 'CALAIS',
				code: '0115'
			}
		]
	})
}
