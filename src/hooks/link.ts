import { useEffect, useRef, useState } from "react";
import { ILink, shortLink as shortService } from "../services/linkService";

const localStorageKey = "links";

type UseLink = () => {
	shorthenLinks: ILink[];
	shortLink: (link: string) => Promise<boolean>;
};

export const useLinks: UseLink = () => {
	const linksStr = localStorage.getItem(localStorageKey);
	const links: ILink[] = linksStr ? (JSON.parse(linksStr) as ILink[]) : [];

	const [shorthenLinks, setShorthenLinks] = useState<ILink[]>(links);

	const firstUpdate = useRef(true);

	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}

		const linksToSave = JSON.stringify(shorthenLinks);
		localStorage.setItem(localStorageKey, linksToSave);
	}, [shorthenLinks]);

	async function shortLink(link: string) {
		const data = await shortService(link);
		if (data) {
			setShorthenLinks([
				...shorthenLinks,
				{
					original_link: data.original_link,
					short_link: data.short_link,
					full_short_link: data.full_short_link
				}
			]);

			return true;
		}

		return false;
	}

	return { shorthenLinks, shortLink };
};
