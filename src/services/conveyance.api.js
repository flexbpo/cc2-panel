import {ccPanelApi} from "./config";

export const getConveyance = async (search) => {
	const searchTerm = search.toLowerCase().trim()
	const { data } = await ccPanelApi(`/conveyance`).catch(error => error.response);

	return data?.data?.filter(item => {
		const itemName = item.name.toLowerCase().trim();
		return itemName.includes(searchTerm);
	})
}

export const getIdConveyance = async (id) => {
	const { data } = await ccPanelApi(`/conveyance/${id}`).catch(error => error.response);

	return await data
}
