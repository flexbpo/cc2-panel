import {NextResponse} from "next/server";

export async function GET() {
	return NextResponse.json({
		data: [
			{
				name: 'NOLL TRUCKING',
				code: 'NOLL'
			}, {
				name: 'BLOCKCHAIN EXPEDITE INC',
				code: 'BEIO'
			}, {
				name: 'Esquivez Trucking',
				code: 'ESVZ'
			}, {
				name: 'Golden Fish Logistic Solutions',
				code: 'GFLH'
			}, {
				name: 'INTERLOGISTICS CORP',
				code: 'IRLC'
			}, {
				name: 'Grist test',
				code: 'GRIX'
			}, {
				name: 'TRANSPORTES ARREOLA',
				code: 'TOAG'
			}, {
				name: 'PRUEBA CARRIER',
				code: 'MSKP'
			}, {
				name: 'TRANSQUIMICA BINACIONAL SA DE CV',
				code: 'TQRD'
			}, {
				name: 'APACHE WAGON SDRL',
				code: 'AWSM'
			}
		]
	})
}
