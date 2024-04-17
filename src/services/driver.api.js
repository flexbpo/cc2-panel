import {ccPanelApi} from "./config";

export const getDrivers = async (search, fast) => {
	const searchTerm = search.toLowerCase().trim()
	const { data } = await ccPanelApi(`/driver`).catch(error => error.response);

	return data?.data?.filter(item => {
		const itemName = item.name.toLowerCase().trim();
		const itemLicence = item.licence.toLowerCase().trim();
		const itemFast = item.fast.toLowerCase().trim();
		const inChange = item.inChange.toLowerCase().trim();

		if (fast) {
			return itemName.includes(searchTerm)
			|| itemLicence.includes(searchTerm)
			|| itemFast.includes(searchTerm)
			|| inChange.includes(searchTerm)
		} else {
			return (itemName.includes(searchTerm)
				|| itemLicence.includes(searchTerm)
				|| inChange.includes(searchTerm)) && !itemFast.includes('fast')
		}
	});
}
