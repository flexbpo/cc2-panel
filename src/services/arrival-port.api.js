import {ccPanelApi} from "./config";

export const getArrivalPort = async (search) => {
	const searchTerm = search.toLowerCase().trim()
	const { data } = await ccPanelApi(`/arrival-port`).catch(error => error.response);

	return data?.data?.filter(item => {
		const itemName = item.name.toLowerCase().trim();
		const itemCode = item.code.toLowerCase().trim();
		return itemName.includes(searchTerm) || itemCode.includes(searchTerm);
	})
}
