import React from "react";
import { Button } from "../shared/Buttons";
import { Title1, Text } from "../shared/Texts";
import { Wrapper } from "../shared/Wrapper";
import { StyledHero, Image } from "./HeroStyles";

const Hero = () => {
	return (
		<Wrapper>
			<StyledHero>
				<Image />
				<div>
					<Title1>More than just shorter links</Title1>
					<Text>
						Build your brand’s recognition and get detailed insights on how your links
						are performing.
					</Text>
					<Button>Get Started</Button>
				</div>
			</StyledHero>
		</Wrapper>
	);
};

export default Hero;
