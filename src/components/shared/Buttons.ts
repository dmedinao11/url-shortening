import styled from "styled-components";
import { borderRadiusItem, colors } from "../../styles/variables";

export const Button = styled.button<{ w100?: boolean; square?: boolean }>`
	color: white;
	background-color: ${colors.Cyan};
	padding: 0.8rem 2rem;
	font-size: 1.3rem;
	border-radius: 2rem;
	font-weight: 700;
	border: none;

	${(props) => props.w100 && "width: 100%;"}
	${(props) => props.square && `border-radius: ${borderRadiusItem};`}
`;

export const CopyButton = styled(Button)`
	border-radius: ${borderRadiusItem};
	padding: 0.5rem 2rem;
`;
