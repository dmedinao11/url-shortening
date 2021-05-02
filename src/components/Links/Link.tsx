import React from "react";
import { CopyButton } from "../shared/Buttons";
import { LinkUrl, StyledLink } from "./LinksStyled";

export interface ILink {
	originalLink: string;
	shorthenLink: string;
}

const Link = ({ originalLink, shorthenLink }: ILink) => {
	return (
		<StyledLink>
			<LinkUrl>{originalLink}</LinkUrl>
			<hr />
			<LinkUrl shorten>{shorthenLink}</LinkUrl>
			<CopyButton square>Copy</CopyButton>
		</StyledLink>
	);
};

export default Link;
