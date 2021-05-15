import React from "react";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Hero from "./components/Hero/Hero";
import Links from "./components/Links/Links";

import "animate.css";

//TODO: Versión desktop

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Links />
			<Features />
			<GetStarted />
			<Footer />
		</>
	);
}

export default App;
