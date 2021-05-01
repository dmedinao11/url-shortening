import React from "react";
import { Title2 } from "../shared/Texts";
import {
	FooterLink,
	FooterLinksSection as div,
	FooterSectionTitle,
	Social,
	SocialLogo,
	StyledFooter
} from "./FooterStyled";

const Footer = () => {
	return (
		<StyledFooter>
			<Title2 white>Shortly</Title2>
			<div>
				<div>
					<FooterSectionTitle>Features</FooterSectionTitle>
					<FooterLink>Link Shortening</FooterLink>
					<FooterLink>Branded Links</FooterLink>
					<FooterLink>Analytic</FooterLink>
				</div>
				<div>
					<FooterSectionTitle>Resources</FooterSectionTitle>
					<FooterLink>Blog</FooterLink>
					<FooterLink>Developers</FooterLink>
					<FooterLink>Support</FooterLink>
				</div>
				<div>
					<FooterSectionTitle>Company</FooterSectionTitle>
					<FooterLink>About</FooterLink>
					<FooterLink>Our Team</FooterLink>
					<FooterLink>Careers</FooterLink>
					<FooterLink>Contact</FooterLink>
				</div>
			</div>
			<Social>
				<SocialLogo className="fab fa-facebook-square" />
				<SocialLogo className="fab fa-twitter" />
				<SocialLogo className="fab fa-pinterest" />
				<SocialLogo className="fab fa-instagram" />
			</Social>
		</StyledFooter>
	);
};

export default Footer;
