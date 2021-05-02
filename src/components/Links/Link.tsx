import React from "react";
import { ILink } from "../../services/linkService";
import { CopyButton } from "../shared/Buttons";
import { LinkUrl, StyledLink } from "./LinksStyled";

const Link = ({ short_link, original_link }: ILink) => {
	return (
		<StyledLink>
			{/* TODO: acortar longitud con un pipe */}
			<LinkUrl>{original_link}</LinkUrl>
			<hr />
			<LinkUrl shorten>{short_link}</LinkUrl>
			<CopyButton square>Copy</CopyButton>
		</StyledLink>
	);
};

export default Link;
