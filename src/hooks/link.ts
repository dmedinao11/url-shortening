import { useEffect, useRef, useState } from "react";
import { ILink } from "../components/Links/Link";
import { shortLink as shortService } from "../services/linkService";

const localStorageKey = "links";

export const useLinks = () => {
	const linksStr = localStorage.getItem(localStorageKey);
	const links: ILink[] = linksStr ? (JSON.parse(linksStr) as ILink[]) : [];

	const [shorthenLinks, setShorthenLinks] = useState<ILink[]>(links);

	const firstUpdate = useRef(true);

	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}

		console.warn("[SAVED]");
		const linksToSave = JSON.stringify(shorthenLinks);
		localStorage.setItem(localStorageKey, linksToSave);
	}, [shorthenLinks]);

	async function shortLink(link: string) {
		const data = await shortService(link);
		setShorthenLinks([
			...shorthenLinks,
			{
				originalLink: data.original_link,
				shorthenLink: data.full_short_link
			}
		]);
	}

	return { shorthenLinks, shortLink };
};
