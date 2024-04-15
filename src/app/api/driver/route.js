import {NextResponse} from "next/server";

export async function GET() {
	return NextResponse.json({
		data: [
			{
				id:1,
				name: 'FERNANDO LARAS',
				licence: '59595959, (Baja California, MX)',
				inChange: 'In charge',
				fast: 'FAST',
				code: '0101'
			}, {
				id:2,
				name: 'Alejandro Esquivez',
				licence: '59595959, (Baja California, MX)',
				inChange: 'In charge',
				fast: 'FAST',
				code: '0103'
			}, {
				id:3,
				name: 'Angel Zavala B',
				licence: '0101T373694lll, (Jalisco, MX)',
				inChange: '',
				fast: '',
				code: '0104'
			}, {
				id:4,
				name: 'Fernando Lara',
				licence: 'AWD1234QW, (Aguascalientes, MX)',
				inChange: 'In charge',
				fast: 'FAST',
				code: '0105'
			}, {
				id:5,
				name: 'PruebaCuatro TestCuatro',
				licence: '0101T373694lll, (Ontario, CA)',
				inChange: '',
				fast: '',
				code: '0106'
			}, {
				id:6,
				name: 'PruebaCinco TestFive',
				licence: '0101T373694lll, (Michoacan, MX)',
				inChange: '',
				fast: 'FAST',
				code: '0107'
			}, {
				id:7,
				name: 'PruebaSeis testSix',
				licence: '0101T373694lll, (Michoacan, MX)',
				inChange: 'In charge',
				fast: 'FAST',
				code: '0108'
			}, {
				id:8,
				name: 'pruebaSieteEd SevenTestEd',
				licence: '59595959, (Baja California, MX)',
				inChange: 'In charge',
				fast: 'FAST',
				code: '0109'
			}, {
				id:9,
				name: 'PAUL YOUNG',
				licence: 'MNN123412343, (Monaghan, US)',
				inChange: '',
				fast: '',
				code: '0110'
			}, {
				id:10,
				name: 'MARK MITCHELL',
				licence: '59595959, (Baja California, MX)',
				inChange: 'In charge',
				fast: 'FAST',
				code: '0115'
			}
		]
	})
}











