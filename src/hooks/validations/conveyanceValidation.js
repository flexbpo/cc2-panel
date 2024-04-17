import * as Yup from "yup";

export const conveyanceValidation = () => {
	return  Yup.object({
		type: Yup.string().required('Type is required'),
		conveyanceNumber: Yup.string().required('Conveyance Number is required'),
		primaryPlate: Yup.string().required('Primary Plate is required'),
		vin: Yup.string().required('VIN is required'),
		country: Yup.string().required('Country is required'),
		primaryPlateState: Yup.string().notRequired(),
		make: Yup.string().notRequired(),
		modelYear: Yup.string().notRequired(),
		style: Yup.string().notRequired(),
		secondaryPlate: Yup.string().notRequired(),
		secondaryCountry: Yup.string().notRequired(),
		secondaryState: Yup.string().notRequired(),
		insurer: Yup.string().notRequired(),
		policyNumber: Yup.string().notRequired(),
		policyIssueDate: Yup.string().notRequired(),
		coverageAmount: Yup.string().notRequired()
	})
}
