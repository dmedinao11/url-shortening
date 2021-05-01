import React from "react";
import { Button } from "../shared/Buttons";
import { Wrapper } from "../shared/Wrapper";
import { LinkInput, StyledLinks } from "./LinksStyled";

const Links = () => {
	return (
		<Wrapper gray>
			<StyledLinks>
				<LinkInput placeholder="Shorten a link here..." type="url"></LinkInput>
				<Button w100 square>
					Shorten It!
				</Button>
			</StyledLinks>
		</Wrapper>
	);
};

export default Links;
