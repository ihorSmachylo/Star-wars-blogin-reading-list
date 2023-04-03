import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";


export const DetailsStarships = () => {
    const { store, actions } = useContext(Context);
    const selectStarship = store.selectStarship;
    const urlImage = "https://starwars-visualguide.com/assets/img/starships/" + selectStarship.id + ".jpg";
    const handleOnErrorImg = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };

    if (!selectStarship.id) {
        return (<Navigate to="/reload"/>)
    } else {
        return (
            <div className="container bg-dark">
                <div className="card mb-3  bg-dark text-light">
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img className="img-fluid rounded-start" src={urlImage} onError={handleOnErrorImg}></img>
                        </div>
                        <div className="col-md-3">
                            <div className="card-body">
                                <h1>{selectStarship.name}</h1>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-2">
                            <h5>Name</h5>
                            <p>{selectStarship.name}</p>
                        </div>
                        <div className="col-2">
                            <h5>Model</h5>
                            <p>{selectStarship.model}</p>
                        </div>
                        <div className="col-2">
                            <h5>Manufacturer</h5>
                            <p>{selectStarship.manufacturer}</p>
                        </div>
                        <div className="col-2">
                            <h5>Cost in credits</h5>
                            <p>{selectStarship.cost_in_credits}</p>
                        </div>
                        <div className="col-2">
                            <h5>Length</h5>
                            <p>{selectStarship.length}</p>
                        </div>
                        <div className="col-2">
                            <h5>Crew</h5>
                            <p>{selectStarship.crew}</p>
                        </div>
                        <div className="col-2">
                            <h5>Passengers</h5>
                            <p>{selectStarship.passengers}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
        }
}