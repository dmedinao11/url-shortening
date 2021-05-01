import React from "react";
import { IFeature } from "../../data/features";
import { Title3, Text } from "../shared/Texts";
import { FeatureIcon, StyledFeature } from "./FeaturesStyled";

const Feature = ({ title, img, desc }: IFeature) => {
	return (
		<StyledFeature>
			<FeatureIcon>
				<img src={img} alt="feature-icon" />
			</FeatureIcon>
			<Title3>{title}</Title3>
			<Text>{desc}</Text>
		</StyledFeature>
	);
};

export default Feature;
