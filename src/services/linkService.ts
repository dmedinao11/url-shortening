import axios from "axios";

const url = "https://api.shrtco.de/v2/shorten";

interface IResponse {
	ok: boolean;
	result: IResultDetail;
}

interface IResultDetail {
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

export interface ILink {
	short_link: string;
	full_short_link: string;
	original_link: string;
}

export const shortLink = (toShort: string) => {
	return axios
		.post<IResponse>(`${url}?url=${toShort}`)
		.then(({ data }) => {
			const result: ILink = {
				short_link: data.result.short_link,
				full_short_link: data.result.full_short_link,
				original_link: data.result.original_link
			};
			return result;
		})
		.catch(() => null);
};
