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

export const LinkField = styled.div`
	width: 100%;
	margin-bottom: ${wrapperPadding};
	background-color: white;
	padding: 0.8rem ${wrapperPadding};
	border-radius: ${borderRadiusItem};
	font-size: 1.2rem;
	display: flex;
	justify-content: space-between;

	& * {
		color: ${colors.VeryDarkViolet};
	}

	&:hover i {
		display: inline;
	}
`;

export const LinkInput = styled.input`
	border: none;
	max-width: 90%;
	font-size: 1.2rem;

	&:focus-visible {
		outline: none;
	}
`;

export const LinkFieldButton = styled.i`
	display: none;
	cursor: pointer;
	margin: auto 0;
	&:hover {
		color: ${colors.Cyan};
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
