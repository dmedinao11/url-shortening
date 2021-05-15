import React, { useRef, useState } from "react";

import logoImg from "../../assets/logo.svg";
import { Button } from "../shared/Buttons";
import { Wrapper } from "../shared/Wrapper";
import {
	StyledHeader,
	MenuButton,
	Menu,
	NavItem,
	MenuSection
} from "./HederStyles";

const Header = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const menuRef = useRef<HTMLUListElement>(null);

	const handleExitEnd = () => {
		setShowMenu(!showMenu);
		const menuHtml = menuRef.current as HTMLUListElement;
		menuHtml.removeEventListener("animationend", handleExitEnd);
		menuHtml.style.animationName = "bounceInDown";
	};

	const handleMenuToggle = () => {
		const menuHtml = menuRef.current as HTMLUListElement;

		if (showMenu) {
			menuHtml.style.animationName = "none";
			menuHtml.offsetHeight;
			menuHtml.style.animationName = "bounceOutUp";
			menuHtml.addEventListener("animationend", handleExitEnd);
		} else setShowMenu(!showMenu);
	};

	return (
		<Wrapper>
			<StyledHeader>
				<img src={logoImg}></img>

				<MenuButton onClick={handleMenuToggle}></MenuButton>
				<Menu show={showMenu} ref={menuRef}>
					<MenuSection>
						<NavItem>Features</NavItem>
						<NavItem>Pricing</NavItem>
						<NavItem>Resources</NavItem>
					</MenuSection>
					<hr />
					<MenuSection>
						<NavItem>Login</NavItem>
						<Button w100 signUp>
							Sign Up
						</Button>
					</MenuSection>
				</Menu>
			</StyledHeader>
		</Wrapper>
	);
};

export default Header;
