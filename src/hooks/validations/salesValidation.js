import * as Yup from "yup";

export const salesValidation = () => {
	return  Yup.object({
		seals: Yup.array().notRequired(),
		iit: Yup.boolean().notRequired(),
		iitType: Yup.string().when('iit', ([iit], schema) => {
			return iit ? schema.required('IIT Type is required') : schema.notRequired();
		})
	})
}
