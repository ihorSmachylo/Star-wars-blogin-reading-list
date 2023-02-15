import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Cards.jsx";
export const Home = () => (
	<div className="container">
		
		<div>
			<h3 className="text-danger">Characters</h3>
			<hr/>
			<Card/>
			<h3 className="text-danger">Planets</h3>
		</div>
	</div>
);
