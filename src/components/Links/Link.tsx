import React, { useState } from "react";
import { ILink } from "../../services/linkService";
import { animePrefix } from "../../styles/variables";
import { CopyButton } from "../shared/Buttons";
import { LinkError, LinkUrl, StyledLink } from "./LinksStyled";

const Link = ({ short_link, original_link, full_short_link }: ILink) => {
	const [flags, setFlags] = useState({ isCopied: false, hasCopyError: false });

	const handleCopyClick = async () => {
		try {
			await navigator.clipboard.writeText(full_short_link);
			setFlags({ hasCopyError: false, isCopied: true });
		} catch (error) {
			setFlags({ isCopied: false, hasCopyError: true });
		}
	};

	return (
		<StyledLink className={`${animePrefix}animated ${animePrefix}backInDown`}>
			<LinkUrl>{original_link}</LinkUrl>
			<hr />
			<LinkUrl shorten>{short_link}</LinkUrl>

			<CopyButton onClick={handleCopyClick} copy={flags.isCopied} square>
				{flags.isCopied ? "Copied!" : "Copy"}
			</CopyButton>
			{flags.hasCopyError && (
				<LinkError>Link could not set on clipboard</LinkError>
			)}
		</StyledLink>
	);
};

export default Link;
