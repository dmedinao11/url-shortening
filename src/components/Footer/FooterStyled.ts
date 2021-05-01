import styled from "styled-components";
import { colors } from "../../styles/variables";

export const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	background-color: ${colors.VeryDarkViolet};
	padding: 3rem 0;
`;

export const FooterLinksContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FooterLinksSection = styled.div``;

export const FooterSectionTitle = styled.h4`
	text-align: center;
	color: white;
	font-weight: 700;
	cursor: default;
	margin-bottom: 1.5rem;
	&:first-of-type {
		margin-top: 1.6rem;
	}
`;

export const FooterLink = styled.a`
	color: white;
	cursor: pointer;
	text-align: center;
	display: block;
	font-size: 0.8rem;
	margin-bottom: 0.5rem;

	&:hover {
		color: ${colors.Cyan};
	}

	&:last-of-type {
		margin-bottom: 1.5rem;
	}
`;

export const Social = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin-top: 1rem;
`;

export const SocialLogo = styled.i`
	font-size: 1.5rem;
	color: white;
	cursor: pointer;

	&:hover {
		color: ${colors.Cyan};
	}
`;
