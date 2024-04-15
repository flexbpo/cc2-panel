import {ccPanelApi} from "./config";

export const getEquipments = async (search) => {
	const searchTerm = search.toLowerCase().trim()
	const { data } = await ccPanelApi(`/equipment`).catch(error => error.response);

	return data?.data?.filter(item => {
		const itemName = item.name.toLowerCase().trim();
		const itemDescription = item.description.toLowerCase().trim();
		/*const itemFast = item.fast.toLowerCase().trim();
		const inChange = item.inChange.toLowerCase().trim();*/
		return itemName.includes(searchTerm)
			|| itemDescription.includes(searchTerm)
			/*|| itemFast.includes(searchTerm)
			|| inChange.includes(searchTerm);*/
	})
}
