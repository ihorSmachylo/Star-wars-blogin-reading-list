import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { CardStarships } from "../views/CardStarships.jsx";


export const Starships = () => {
	const { store, actions } = useContext(Context);
	const Starships = store.starship;

	return (
		<div className="container bg-dark mb-3">
            <h1 className="text-light text-center pt-4">Starships</h1>
			<div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
				{   Starships.map((e, i)=>{
                        let card = <CardStarships key= {i} id={i+1} name = {e.name} model = {e.model} manufacturer = {e.manufacturer} cost_in_credits = {e.cost_in_credits} length = {e.length} crew = {e.crew} passengers = {e.passengers}/>
                        return card;
                    })
                }
			</div>
		</div>
	);
};


