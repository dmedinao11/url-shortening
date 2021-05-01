import React from "react";
import { Button } from "../shared/Buttons";
import { Wrapper } from "../shared/Wrapper";
import { StyledHero, Title, Text, Image } from "./HeroStyles";

const Hero = () => {
	return (
		<Wrapper>
			<StyledHero>
				<Image />
				<div>
					<Title>More than just shorter links</Title>
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
