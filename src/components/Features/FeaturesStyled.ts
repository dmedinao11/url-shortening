import styled from "styled-components";
import {
	borderRadiusItem,
	boxSeparetion,
	colors,
	wrapperPadding
} from "../../styles/variables";

export const FeaturesHead = styled.div`
	margin-bottom: ${boxSeparetion};
`;

export const FeaturesContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: ${boxSeparetion};
	position: relative;
	margin-bottom: ${boxSeparetion};
`;

export const StyledFeature = styled.article`
	border-radius: ${borderRadiusItem};
	padding: ${wrapperPadding};
	background-color: white;
	padding-top: 4rem;
	position: relative;
	z-index: 1;
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
`;

export const VerticalLine = styled.div`
	width: 0.3rem;
	height: 100%;
	background-color: ${colors.Cyan};
	position: absolute;
	left: calc(50% - 0.15rem);
`;
