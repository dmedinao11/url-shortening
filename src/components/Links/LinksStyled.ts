import styled from "styled-components";
import {
	borderRadiusItem,
	boxSeparetion,
	colors,
	wrapperPadding
} from "../../styles/variables";
import bgMobile from "../../assets/bg-shorten-mobile.svg";

export const LinksWrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: ${wrapperPadding};
	margin-bottom: ${boxSeparetion};
`;

export const LinksShorter = styled.div`
	padding: ${wrapperPadding};
	background: ${colors.DarkViolet} url(${bgMobile}) no-repeat;
	background-position: 100% 0%;
	border-radius: ${borderRadiusItem};
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
	background-color: white;
	border-radius: ${borderRadiusItem};
	display: flex;
	flex-direction: column;
	gap: 0.8rem;

	& hr {
		border: none;
		height: 1px;
		background-color: ${colors.Gray};
		margin: 0 -1rem;
	}
`;

export const LinkUrl = styled.p<{ shorten?: boolean }>`
	font-size: 1.2rem;
	color: ${colors.DarkViolet};

	${(props) => props.shorten && `color: ${colors.Cyan};`}
`;
