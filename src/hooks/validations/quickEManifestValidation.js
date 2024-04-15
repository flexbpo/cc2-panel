import * as Yup from "yup";

export const quickEManifestValidation = (newShipment, equipment, drivers) => {
	const dynamicSchema = Yup.object().shape({
		description: Yup.string().when('newShipment', ([newShipments], schema) => {
			return newShipment ? schema.required('Description is required') : schema.notRequired();
		}),
		uom: Yup.string().when('newShipment', ([newShipments], schema) => {
			return newShipment ? schema.required('UOM is required') : schema.notRequired();
		}),
		quantityUom: Yup.string().when('newShipment', ([newShipments], schema) => {
			return newShipment ? schema.required('Quantity is required') : schema.notRequired();
		}),
		gross: Yup.string().when('newShipment', ([newShipments], schema) => {
			return newShipment ? schema.required('Gross is required') : schema.notRequired();
		}),
		quantityGross: Yup.string().when('newShipment', ([newShipments], schema) => {
			return newShipment ? schema.required('Quantity is required') : schema.notRequired();
		}),
	});

	const driversSchema = Yup.object().shape({
		name: Yup.string().when(['drivers[0].name', 'drivers[1].name'], ([name, secondDriverName], schema) => {
			if (drivers[0].name === undefined && drivers[1].name === undefined) {
				return schema.required('Drivers is required');
			} else {
				return schema.notRequired();
			}
		})
	});

	const equipmentSchema = Yup.object().shape({
		name: Yup.string().when(['equipment[0].name', 'equipment[1].name'], ([name, secondDriverName], schema) => {
			if (equipment[0].name === undefined && equipment[1].name === undefined && equipment[2].name === undefined && equipment[3].name === undefined) {
				return schema.notRequired();
				//return schema.required('Equipment is required');
			} else {
				return schema.notRequired();
			}
		})
	});

	return  Yup.object({
		'trip-number': Yup.string().required('Trip number is required'),
		'estimated-arrival': Yup.string().required('Estimated arrival is required'),
		'arrival-port': Yup.string().required('Arrival port is required'),
		fast: Yup.boolean().required('Fast is required'),
		conveyance: Yup.string().required('Conveyance is required'),
		drivers: Yup.array().of(driversSchema),
		equipment: Yup.array().of(equipmentSchema),
		scn: Yup.string().when('newShipment', ([newShipments], schema) => {
			return newShipment ? schema.required('SCN is required') : schema.notRequired();
		}),
		entry: Yup.string().when('newShipment', ([newShipments], schema) => {
			return newShipment ? schema.required('Entry is required') : schema.notRequired();
		}),
		type: Yup.string().when('newShipment', ([newShipments], schema) => {
			return newShipment ? schema.required('Type is required') : schema.notRequired();
		}),
		shipper: Yup.string().when('newShipment', ([newShipments], schema) => {
			return newShipment ? schema.required('Shipper is required') : schema.notRequired();
		}),
		consignee: Yup.string().when('newShipment', ([newShipments], schema) => {
			return newShipment ? schema.required('Consignee is required') : schema.notRequired();
		}),
		commodities: Yup.array().of(dynamicSchema)
	})
}
