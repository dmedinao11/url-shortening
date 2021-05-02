import axios from "axios";

const url = "https://api.shrtco.de/v2/shorten";

export interface IResponse {
	ok: boolean;
	result: Result;
}

export interface Result {
	code: string;
	short_link: string;
	full_short_link: string;
	short_link2: string;
	full_short_link2: string;
	short_link3: string;
	full_short_link3: string;
	share_link: string;
	full_share_link: string;
	original_link: string;
}

//TODO: Filtrar lo necesario en el servicio
//TODO: Catch error
export const shortLink = (toShort = "https://www.google.com/?hl=es") => {
	return axios
		.post<IResponse>(`${url}?url=${toShort}`)
		.then(({ data }) => data.result);
};
