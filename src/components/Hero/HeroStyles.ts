import styled from "styled-components";
import { colors, wrapperPadding } from "../../styles/variables";
import heroImage from "../../assets/illustration-working.svg";

export const StyledHero = styled.section`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-bottom: 4.7rem;
`;

export const Title = styled.h1`
	color: ${colors.VeryDarkViolet};
	font-size: 2.5rem;
	line-height: 1.2;
	margin-bottom: 1.4rem;
`;

export const Text = styled.p`
	font-weight: 500;
	color: ${colors.GrayishViolet};
	font-size: 1.1rem;
	line-height: 1.5;
	margin-bottom: 1.4rem;
`;

export const Image = styled.div`
	margin: 0 -${wrapperPadding};
	position: relative;
	height: 330px;
	width: calc(100% + ${wrapperPadding} * 2);
	background: url(${heroImage}) no-repeat;
	background-size: cover;
	background-position: -15% 0%;
	margin-bottom: 2.5rem;
`;
