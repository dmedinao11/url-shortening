import styled from "styled-components";
import {
	boxSeparetion,
	wrapperPadding,
	wrapperPaddingDesk
} from "../../styles/variables";
import heroImage from "../../assets/illustration-working.svg";

export const StyledHero = styled.section`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-bottom: ${boxSeparetion};

	@media (min-width: 560px) {
		flex-direction: row-reverse;
		text-align: start;
		align-items: center;

		div:last-of-type {
			margin-right: 1rem;
		}

		div > h1,
		div > p {
			text-align: start;
		}

		div > h1 {
			font-size: 4rem;
		}

		div > p {
			font-size: 1.2rem;
		}
	}
`;

export const Image = styled.div`
	--wrapper-padding: ${wrapperPadding};
	margin: 0 calc(-1 * var(--wrapper-padding));
	position: relative;
	height: 330px;
	width: calc(100% + var(--wrapper-padding) * 2);
	background: url(${heroImage}) no-repeat;
	background-size: cover;
	background-position: -15% 0%;
	margin-bottom: 2.5rem;

	@media (min-width: 950px) {
		--wrapper-padding: ${wrapperPaddingDesk};
		width: 100%;
		height: 480px;
		margin-left: calc(1 * var(--wrapper-padding));
		margin-bottom: unset;
		background-position: 0% 0%;
	}
`;
