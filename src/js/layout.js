import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { People } from "./views/People.jsx";
import { Planets } from "./views/Planets.jsx"
import { Starships } from "./views/Starships.jsx"
import { DetailsPlanets } from "./views/DetailsPlanets.jsx"
import { DetailsStarships } from "./views/DetailsStarships.jsx"
import { DetailsPeople } from "./views/DetailsPeople.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/people" element={<People />} />
						<Route path="/people/:theid" element={<DetailsPeople />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/planets/:theid" element={<DetailsPlanets />} />
						<Route path="/starships" element={<Starships />} />
						<Route path="/starships/:theid" element={<DetailsStarships />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
