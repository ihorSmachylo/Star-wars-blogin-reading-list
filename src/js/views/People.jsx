import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { CardPeople } from "./CardPeople.jsx";

export const People = () => {
	const { store, actions } = useContext(Context);
	const people = store.people;

	return (
		<div className="container bg-dark mb-3">
            <h1 className="text-light text-center pt-4">People</h1>
			<div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
				{   people.map((e, i)=>{
                        let card = <CardPeople key= {i} id={i+1} name = {e.name} height = {e.height} mass = {e.mass} hair_color = {e.hair_color} skin_color = {e.skin_color} eye_color = {e.eye_color}/>
                        return card;
                    })
                }
			</div>
		</div>
	);
};