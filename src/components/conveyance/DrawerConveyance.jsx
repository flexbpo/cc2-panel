'use client'

import {DrawerWithoutBG} from "@/components/ui/DrawerWithoutBG"
import {useDrawersStore} from "@/store/drawers.store"
import SimpleBar from "simplebar-react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useEffect, useState} from "react";
import {conveyanceValidation} from "@/hooks/validations/conveyanceValidation";
import {useQuery} from "@tanstack/react-query";
import {getIdConveyance} from "@/services/conveyance.api";
import {CustomSelect} from "@/components/forms/CustomSelect";
import {Input} from "@/components/forms/Input";
import {DateTimePicker} from "@/components/forms/DateTimePicker";
import {toast} from "sonner";

export const DrawerConveyance = () => {
	const drawerConveyance = useDrawersStore(state => state.drawerConveyance)
	const showDrawerConveyance = useDrawersStore(store => store.showDrawerConveyance)
	const idConveyance = useDrawersStore(store => store.idConveyance)

	const defaultVal = {
		type: '',
		conveyanceNumber: '',
		primaryPlate: '',
		vin: '',
		country: '',
		primaryPlateState: '',
		make: '',
		modelYear: '',
		style: '',
		secondaryPlate: '',
		secondaryCountry: '',
		secondaryState: '',
		insurer: '',
		policyNumber: '',
		policyIssueDate: '',
		coverageAmount: ''
	}

	const [values, setValues] = useState(defaultVal)

	const {
		control,
		handleSubmit,
		reset,
		formState: {errors}} = useForm({
			defaultValues: defaultVal,
			values,
			resolver: yupResolver(conveyanceValidation()),
			mode: "onChange"
		})

	const {data} = useQuery({
		queryKey: ['conveyance id'],
		queryFn: async () => await getIdConveyance(idConveyance),
		enabled: idConveyance.toString().length > 0 && drawerConveyance
	})

	useEffect(() => {
		if(data !== undefined) setValues(data?.data[0])
		if(idConveyance === '') setValues(defaultVal)
	}, [data, idConveyance]);

	const onSubmit = values => {
		showDrawerConveyance()
		reset(defaultVal)
		toast.success('Conveyance successfully!')
	}

	const onReset = () => {
		showDrawerConveyance()
		reset(defaultVal)
	}

	return (
		<DrawerWithoutBG title='Conveyance' show={drawerConveyance} setShow={() => showDrawerConveyance()}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<SimpleBar className="h-[calc(100svh-140px)] lg:h-[calc(100svh-120px)] px-[2px]">
					<ul className="grid grid-cols-2 gap-x-2.5 gap-y-3">
						<li>
							<CustomSelect
								defaultValue={values.type}
								label="Type"
								name="type"
								control={control}
								options={[
									{value: 'Armored Truck', label: 'Armored Truck'},
									{value: 'Automobile', label: 'Automobile'},
									{value: 'Box Truck', label: 'Box Truck'},
									{value: 'Busk', label: 'Bus'},
									{value: 'Beverage Truck', label: 'Beverage Truck'},
									{value: 'Bicycle', label: 'Bicycle'},
									{value: 'Construction Vehicle', label: 'Construction Vehicle'},
									{value: 'Emergency Vehicle', label: 'Emergency Vehicle'},
									{value: 'Ferry', label: 'Ferry'},
									{value: 'Farm Tractor', label: 'Farm Tractor'},
									{value: 'Garbage Truck', label: 'Garbage Truck'},
									{value: 'Motorcycle', label: 'Motorcycle'},
									{value: 'Other', label: 'Other'},
									{value: 'Pickup Truck with Camper', label: 'Pickup Truck with Camper'},
									{value: 'Panel Truck', label: 'Panel Truck'},
									{value: 'Pick-up Truck', label: 'Pick-up Truck'},
									{value: 'Passenger Van', label: 'Passenger Van'},
									{value: 'Recreation Vehicle', label: 'Recreation Vehicle'},
									{value: 'Tractor (semi)', label: 'Tractor (semi)'},
									{value: 'Van', label: 'Van'},
								]}/>
						</li>

						<li>
							<Input
								type="text"
								name="conveyanceNumber"
								label="Conveyance Number"
								control={control}/>
						</li>

						<li>
							<Input
								type="text"
								name="primaryPlate"
								label="Primary Plate"
								control={control}/>
						</li>

						<li>
							<Input
								type="text"
								name="vin"
								label="Vin"
								control={control}/>
						</li>

						<li>
							<CustomSelect
								name="country"
								label="Country"
								control={control}
								options={[
									{value: "Canada", label: 'Canada'},
									{value: "Mexico", label: "Mexico"},
									{value: "United States of America", label: "United States of America"}
								]}
							/>
						</li>

						<li>
							<Input
								type="text"
								name="primaryPlateState"
								label="Primary Plate State"
								control={control}/>
						</li>
					</ul>

					<h2 className="mt-3 mb-2.5 text-[11px] font-semibold relative">
						<span
							className="bg-white dark:bg-secondary-800  custom-dark:bg-secondary-800 relative pr-3 z-[1]">
							Secondary Info
						</span>

						<hr className="absolute top-1/2 right-0 w-full"/>
					</h2>

					<ul className="grid grid-cols-2 gap-x-2.5 gap-y-3">
						<li>
							<CustomSelect
								label="Make"
								name="make"
								control={control}
								options={[
									{value: 'FREIGHTLINER', label: 'FREIGHTLINER'},
									{value: 'INTERNATIONAL', label: 'INTERNATIONAL'},
									{value: 'KENWORTH', label: 'KENWORTH'},
									{value: 'PETERBILT', label: 'PETERBILT'},
									{value: 'VOLVO', label: 'VOLVO'},
									{value: 'STERLING', label: 'STERLING'},
									{value: 'DODGE', label: 'DODGE'},
									{value: 'CHEVROLET', label: 'CHEVROLET'},
									{value: 'FORD', label: 'FORD'},
									{value: 'GMC MOTORS', label: 'GMC MOTORS'},
									{value: 'KODIAK', label: 'KODIAK'},
									{value: 'NISSAN', label: 'NISSAN'},
									{value: 'INTER TRUCK', label: 'INTER TRUCK'},
									{value: 'MCI', label: 'MCI'},
									{value: 'DINA', label: 'DINA'},
									{value: 'AUTO CAR', label: 'AUTO CAR'},
									{value: 'CAZA', label: 'CAZA'},
									{value: 'INTERNAT/MERCEDES', label: 'INTERNAT/MERCEDES'},
									{value: 'MACK', label: 'MACK'},
									{value: 'MITSUBISHI', label: 'MITSUBISHI'},
									{value: 'PENA MOTORS', label: 'PENA MOTORS'},
									{value: 'RMZ MOTOR', label: 'RMZ MOTOR'},
									{value: 'ROADKING', label: 'ROADKING'},
									{value: 'TRACTOCAZA', label: 'TRACTOCAZA'},
									{value: 'UD TRUCK', label: 'UD TRUCK'},
									{value: 'WHITE', label: 'WHITE'},
									{value: 'WESTER STAR', label: 'WESTER STAR'},
									{value: 'ISUZU', label: 'ISUZU'},
									{value: 'TOYOTA', label: 'TOYOTA'},
									{value: 'REMOLQUE', label: 'REMOLQUE'},
									{value: 'VOLKSWAGEN', label: 'VOLKSWAGEN'},
									{value: 'FAMSA', label: 'FAMSA'},
									{value: 'ZAMARRIPA', label: 'ZAMARRIPA'},
									{value: 'WHGM', label: 'WHGM'},
									{value: 'SCANIA', label: 'SCANIA'},
									{value: 'NO ESPECIFICADA', label: 'NO ESPECIFICADA'},
									{value: 'MERCEDEZ BENZ', label: 'MERCEDEZ BENZ'},
									{value: 'MAZDA', label: 'MAZDA'},
									{value: 'LOZANO', label: 'LOZANO'},
									{value: 'RAMIREZ', label: 'RAMIREZ'},
									{value: 'SILVER', label: 'SILVER'},
									{value: 'CHRYSLER', label: 'CHRYSLER'},
									{value: 'HERON', label: 'HERON'},
									{value: 'ATLAS', label: 'ATLAS'},
									{value: 'REDILAS', label: 'REDILAS'},
									{value: 'DIAMOND', label: 'DIAMOND'},
									{value: 'ECONOLINE', label: 'ECONOLINE'},
									{value: 'ACASA', label: 'ACASA'},
									{value: 'CAMIONETA', label: 'CAMIONETA'},
									{value: 'GREAT DANE', label: 'GREAT DANE'},
									{value: 'KINGHAM', label: 'KINGHAM'},
									{value: 'GMC', label: 'GMC'},
									{value: 'N/A', label: 'N/A'},
									{value: 'DESTEFANO', label: 'DESTEFANO'},
									{value: 'UTILITY', label: 'UTILITY'},
									{value: 'FERBUS', label: 'FERBUS'},
									{value: 'HENDRICKSON', label: 'HENDRICKSON'},
									{value: 'CONDOR', label: 'CONDOR'},
									{value: 'CONDE', label: 'CONDE'},
									{value: 'CHEVY', label: 'CHEVY'},
									{value: 'RANGER', label: 'RANGER'},
									{value: 'WAINE', label: 'WAINE'},
									{value: 'HONDA', label: 'HONDA'},
									{value: 'JEEP', label: 'JEEP'},
									{value: 'RENAULT', label: 'RENAULT'},
									{value: 'SEAT', label: 'SEAT'},
									{value: 'APRILIA', label: 'APRILIA'},
									{value: 'HINNO', label: 'HINNO'},
									{value: 'NORTE', label: 'NORTE'},
									{value: 'MARMOL', label: 'MARMOL'},
									{value: 'IVECO', label: 'IVECO'},
									{value: 'INSENSE', label: 'INSENSE'},
									{value: 'SPRINTER', label: 'SPRINTER'},
									{value: 'KILOTON', label: 'KILOTON'},
									{value: 'BRIPEXA', label: 'BRIPEXA'},
									{value: 'PEYCHA', label: 'PEYCHA'},
									{value: 'OJEDA MOTORS', label: 'OJEDA MOTORS'},
									{value: 'NAVISTAR', label: 'NAVISTAR'},
									{value: 'J.M.G.', label: 'J.M.G.'},
									{value: 'RENOVA', label: 'RENOVA'},
									{value: 'AOMEGA', label: 'AOMEGA'},
									{value: 'PLYMOUTH', label: 'PLYMOUTH'},
									{value: 'OTTAWA', label: 'OTTAWA'},
									{value: 'CAPACITY', label: 'CAPACITY'},
									{value: 'OTRA', label: 'OTRA'},
									{value: 'WhiteGMC', label: 'WhiteGMC'},
									{value: 'FEDER TRACK', label: 'FEDER TRACK'},
									{value: 'CRANE CARRIER', label: 'CRANE CARRIER'},
									{value: 'PEUGEOT', label: 'PEUGEOT'},
									{value: 'LORAIN', label: 'LORAIN'},
									{value: 'GOLDEN STAR', label: 'GOLDEN STAR'},
									{value: 'SISU MAGNUM', label: 'SISU MAGNUM'},
									{value: 'WABASH', label: 'WABASH'},
								]}/>
						</li>

						<li>
							<Input
								type="text"
								name="modelYear"
								label="Model Year"
								control={control}/>
						</li>

						<li>
							<Input
								type="text"
								name="style"
								label="Style"
								control={control}/>
						</li>

						<li>
							<Input
								type="text"
								name="secondaryPlate"
								label="Secondary Plate"
								control={control}/>
						</li>

						<li>
							<CustomSelect
								name="secondaryCountry"
								label="Secondary Country"
								control={control}
								options={[
									{value: "Canada", label: 'Canada'},
									{value: "Mexico", label: "Mexico"},
									{value: "United States of America", label: "United States of America"}
								]}
							/>
						</li>

						<li>
							<CustomSelect
								name="secondaryState"
								label="Secondary State"
								control={control}
								options={[
									{value: "Canada", label: 'Canada'},
									{value: "Mexico", label: "Mexico"},
									{value: "United States of America", label: "United States of America"}
								]}
							/>
						</li>
					</ul>

					<h2 className="mt-3 mb-2.5 text-[11px] font-semibold relative">
						<span
							className="bg-white dark:bg-secondary-800  custom-dark:bg-secondary-800 relative pr-3 z-[1]">
							Insurance Info
						</span>

						<hr className="absolute top-1/2 right-0 w-full"/>
					</h2>

					<ul className="grid grid-cols-2 gap-x-2.5 gap-y-3">
						<li>
							<Input
								type="text"
								name="insurer"
								label="Insurer"
								control={control}/>
						</li>

						<li>
							<Input
								type="text"
								name="policyNumber"
								label="Policy Number"
								control={control}/>
						</li>

						<li>
							<DateTimePicker
								label="Policy Issue Date"
								name="policyIssueDate"
								control={control}/>
						</li>

						<li>
							<Input
								type="number"
								name="coverageAmount"
								label="Coverage Amount"
								control={control}/>
						</li>
					</ul>

					<div className="flex items-center gap-6 mt-8">
						<button type="submit" className="o-button">
							<span>Save Conveyance</span>
						</button>

						<button
							type="button"
							className="underline text-primary-500 hover:-translate-y-1 hover:text-primary-400 transition-all"
							onClick={onReset}>
							Cancel
						</button>
					</div>
				</SimpleBar>
			</form>
		</DrawerWithoutBG>
	)
}
