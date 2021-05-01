import styled from "styled-components";
import { boxSeparetion, wrapperPadding } from "../../styles/variables";
import heroImage from "../../assets/illustration-working.svg";

export const StyledHero = styled.section`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-bottom: ${boxSeparetion};
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
