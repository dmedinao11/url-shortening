import styled from "styled-components";
import {
	borderRadiusItem,
	colors,
	wrapperPadding
} from "../../styles/variables";
import bgMobile from "../../assets/bg-shorten-mobile.svg";

export const StyledLinks = styled.section`
	padding: ${wrapperPadding};
	background: ${colors.DarkViolet} url(${bgMobile}) no-repeat;
	background-position: 100% 0%;
	border-radius: ${borderRadiusItem};
	margin-bottom: 4.7rem;
`;

export const LinkInput = styled.input`
	margin-bottom: ${wrapperPadding};
	border-radius: ${borderRadiusItem};
	font-size: 1.2rem;
	padding: 0.8rem ${wrapperPadding};
	width: 100%;
	border: none;

	&:focus-visible {
		outline: none;
	}
`;

export const StyledLink = styled.li`
	list-style: none;
	padding: 1rem;
`;
