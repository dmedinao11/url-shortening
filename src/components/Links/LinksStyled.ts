import styled from "styled-components";
import {
	borderRadiusItem,
	boxSeparetion,
	colors,
	wrapperPadding
} from "../../styles/variables";
import bgMobile from "../../assets/bg-shorten-mobile.svg";
import bgDesk from "../../assets/bg-shorten-desktop.svg";

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

	@media (min-width: 800px) {
		background: ${colors.DarkViolet} url(${bgDesk}) no-repeat;
		background-size: cover;
		display: flex;
		padding: 3.6rem;
		gap: 1rem;
		align-items: center;

		& button {
			width: auto;
			min-width: 180px;
		}
	}
`;

export const LinkInputWrapper = styled.div`
	margin-bottom: ${wrapperPadding};
	@media (min-width: 800px) {
		margin-bottom: 0;
		width: 80%;
	}
`;

export const LinkField = styled.div<{ invalid: boolean }>`
	width: 100%;
	background-color: white;
	padding: 0.8rem ${wrapperPadding};
	border-radius: ${borderRadiusItem};
	font-size: 1.2rem;
	display: flex;
	justify-content: space-between;

	${(props) =>
		props.invalid && `border: 2px solid ${colors.Red}; margin: -4px 0;`}

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

	@media (min-width: 800px) {
		width: 100%;
		max-width: unset;
		margin-right: 0.5rem;
	}
`;

export const LinkError = styled.span`
	color: ${colors.Red};
	font-style: italic;
	font-size: 0.9rem;

	@media (min-width: 800px) {
		position: absolute;
		transform: translateY(10px);
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

		@media (min-width: 800px) {
			display: none;
		}
	}

	@media (min-width: 800px) {
		flex-direction: row;
		padding: 1rem 1.5rem;
		align-items: center;
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

	@media (min-width: 800px) {
		min-width: 200px;

		&:first-of-type {
			margin-right: auto;
		}
	}
`;
