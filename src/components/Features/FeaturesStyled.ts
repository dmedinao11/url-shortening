import styled from "styled-components";
import {
	borderRadiusItem,
	boxSeparetion,
	colors,
	wrapperPadding
} from "../../styles/variables";

export const FeaturesHead = styled.div`
	margin-bottom: ${boxSeparetion};

	@media (min-width: 800px) {
		max-width: 30rem;
		margin: auto;
		margin-bottom: 6rem;

		& h1 {
			font-size: 2.5rem;
		}
	}
`;

export const FeaturesContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: ${boxSeparetion};
	position: relative;
	margin-bottom: calc(${boxSeparetion} + 5.5rem);

	@media (min-width: 800px) {
		flex-direction: row;
		gap: unset;
		justify-content: space-between;
	}
`;

export const StyledFeature = styled.article`
	border-radius: ${borderRadiusItem};
	padding: ${wrapperPadding};
	background-color: white;
	padding-top: 4rem;
	position: relative;
	z-index: 1;

	@media (min-width: 800px) {
		padding: 1.4rem;
		padding-top: 4rem;
		max-width: 19.4rem;
		margin-right: 1.5rem;

		& * {
			text-align: start;
		}

		& h1 {
			font-size: 1.25rem;
		}

		& p {
			font-size: 1rem;
		}

		&:nth-child(2) {
			top: 2.75rem;
		}

		&:nth-child(3) {
			top: 5.5rem;
			margin-right: 0;
		}
	}
`;

export const FeatureIcon = styled.div`
	border-radius: 50%;
	background-color: ${colors.DarkViolet};
	display: flex;
	padding: 1.5rem;
	width: min-content;
	position: absolute;
	top: -2.75rem;
	left: calc(50% - 2.75rem);

	& img {
		width: 2.5rem;
	}

	@media (min-width: 800px) {
		left: ${wrapperPadding};
	}
`;

export const VerticalLine = styled.div`
	width: 0.3rem;
	height: 100%;
	background-color: ${colors.Cyan};
	position: absolute;
	left: calc(50% - 0.15rem);

	@media (min-width: 800px) {
		height: 0.6rem;
		width: 100%;
		left: unset;
		top: calc(50% - 0.15rem);
	}
`;
