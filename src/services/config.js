import axios from "axios";

export const ccPanelApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_URL_API
});
