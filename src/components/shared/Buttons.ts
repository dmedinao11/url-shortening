import styled from "styled-components";
import { borderRadiusItem, colors } from "../../styles/variables";

export const Button = styled.button<{
	w100?: boolean;
	square?: boolean;
	signUp?: boolean;
}>`
	color: white;
	background-color: ${colors.Cyan};
	padding: 0.8rem 2rem;
	font-size: 1.3rem;
	border-radius: 2rem;
	font-weight: 700;
	border: none;
	cursor: pointer;

	&:hover,
	&:disabled {
		background-color: ${colors.LightCyan};
	}

	${(props) => props.w100 && "width: 100%;"}
	${(props) => props.square && `border-radius: ${borderRadiusItem};`}
	${(props) =>
		props.signUp &&
		`
		@media (min-width: 800px) {
			font-size: 1rem;
			padding: 0.7rem 2rem;
		}`}
`;

export const CopyButton = styled(Button)<{ copy: boolean }>`
	border-radius: ${borderRadiusItem};
	padding: 0.5rem 2rem;
	${(props) =>
		props.copy &&
		`
		background-color: ${colors.DarkViolet};
		&:focus {
			animation: rubberBand;
			animation-duration: 1s;		
		}
		`}
	@media (min-width: 800px) {
		font-size: 1rem;
		padding: 0.5rem 0;
		min-width: 6rem;
	}
`;
