import styled from "styled-components";
import { colors } from "../../styles/variables";

export const Title1 = styled.h1`
	color: ${colors.VeryDarkViolet};
	font-size: 2.5rem;
	line-height: 1.2;
	margin-bottom: 1.4rem;
	text-align: center;
`;

export const Title2 = styled(Title1)<{ white?: boolean }>`
	font-size: 1.8rem;
	${(props) => props.white && "color: white;"}
`;

export const Title3 = styled(Title1)`
	font-size: 1.6rem;
`;

export const Text = styled.p<{ small?: boolean }>`
	font-weight: 500;
	color: ${colors.GrayishViolet};
	font-size: 1.1rem;
	line-height: 1.5;
	margin-bottom: 1.4rem;
	text-align: center;
`;
