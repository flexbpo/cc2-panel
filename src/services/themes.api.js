import {ccPanelApi} from "./config";

export const getThemeByID = async (id) => {
	const { data } = await ccPanelApi(`/themes/${id}`).catch(error => error.response);

	return await data;
}
