import React from "react";
import features from "../../data/features";
import { Title2, Text } from "../shared/Texts";
import { Wrapper } from "../shared/Wrapper";
import Feature from "./Feature";
import {
	FeaturesContainer,
	FeaturesHead,
	VerticalLine
} from "./FeaturesStyled";

const Features = () => {
	const featuresJsx = features.map(({ title, desc, img }, key) => (
		<Feature title={title} desc={desc} img={img} key={key} />
	));

	return (
		<Wrapper gray>
			<FeaturesHead>
				<Title2>Advanced Statistics</Title2>
				<Text>
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</Text>
			</FeaturesHead>
			<FeaturesContainer>
				{featuresJsx}
				<VerticalLine />
			</FeaturesContainer>
		</Wrapper>
	);
};

export default Features;
