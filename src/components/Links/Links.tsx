import React from "react";
import { Button } from "../shared/Buttons";
import { Wrapper } from "../shared/Wrapper";
import Link from "./Link";
import { LinkInput, LinksShorter, LinksWrapper } from "./LinksStyled";

const Links = () => {
	return (
		<Wrapper gray noRepeat>
			<LinksWrapper>
				<LinksShorter>
					<LinkInput placeholder="Shorten a link here..." type="url"></LinkInput>
					<Button w100 square>
						Shorten It!
					</Button>
				</LinksShorter>

				<Link
					originalLink="http://localhost:3000/"
					shorthenLink="http://localhost:3000/"
				/>

				<Link
					originalLink="http://localhost:3000/"
					shorthenLink="http://localhost:3000/"
				/>
			</LinksWrapper>
		</Wrapper>
	);
};

export default Links;
