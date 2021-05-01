import React from "react";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Links from "./components/Links/Links";

function App() {
	return (
		<>
			<Header></Header>
			<Hero></Hero>
			<Links></Links>
			<Features></Features>
			<GetStarted />
			<Footer />
		</>
	);
}

export default App;
