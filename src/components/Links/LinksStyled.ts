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

export const LinkInputWrapper = styled.div`
	margin-bottom: ${wrapperPadding};
`;

export const LinkField = styled.div<{ invalid: boolean }>`
	width: 100%;
	background-color: white;
	padding: 0.8rem ${wrapperPadding};
	border-radius: ${borderRadiusItem};
	font-size: 1.2rem;
	display: flex;
	justify-content: space-between;

	${(props) => props.invalid && `border: 2px solid ${colors.Red};`}

	& * {
		color: ${(props) =>
			props.invalid ? `${colors.Red}` : `${colors.VeryDarkViolet}`};
	}

	& * {
		&::placeholder {
			color: ${(props) => (props.invalid ? `${colors.Red}` : "gray")};
		}
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

export const LinkError = styled.span`
	color: ${colors.Red};
	font-style: italic;
	font-size: 0.9rem;
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
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	cursor: default;

	${(props) => props.shorten && `color: ${colors.Cyan};`}
`;
