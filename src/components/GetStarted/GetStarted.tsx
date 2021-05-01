import React from "react";
import { Button } from "../shared/Buttons";
import { Title2 } from "../shared/Texts";
import { StyledGetStarted } from "./GetStartedStyled";

const GetStarted = () => {
	return (
		<StyledGetStarted>
			<Title2 white>Boost your links today</Title2>
			<Button>Get Started</Button>
		</StyledGetStarted>
	);
};

export default GetStarted;
