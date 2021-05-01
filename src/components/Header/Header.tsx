import React, { useState } from "react";

import logoImg from "../../assets/logo.svg";
import { Button } from "../shared/Buttons";
import { Wrapper } from "../shared/Wrapper";
import { StyledHeader, MenuButton, Menu, NavItem } from "./HederStyles";

const Header = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	return (
		<Wrapper>
			<StyledHeader>
				<img src={logoImg}></img>
				<MenuButton onClick={() => setShowMenu(!showMenu)}></MenuButton>
				<Menu show={showMenu}>
					<NavItem mobile={true}>Features</NavItem>
					<NavItem mobile={true}>Pricing</NavItem>
					<NavItem mobile={true}>Resources</NavItem>
					<hr />
					<NavItem mobile={true}>Login</NavItem>
					<Button w100>Sign Up</Button>
				</Menu>
			</StyledHeader>
		</Wrapper>
	);
};

export default Header;
