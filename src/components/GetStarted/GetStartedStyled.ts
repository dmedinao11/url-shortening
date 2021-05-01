import styled from "styled-components";
import { colors } from "../../styles/variables";

import bgImg from "../../assets/bg-boost-mobile.svg";

export const StyledGetStarted = styled.section`
	background-image: url(${bgImg});
	height: 300px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${colors.DarkViolet};
`;
