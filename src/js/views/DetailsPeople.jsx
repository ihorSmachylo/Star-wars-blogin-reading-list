import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";


export const DetailsPeople = () => {
    const { store, actions } = useContext(Context);
    const selectPeople = store.selectPeople;
    const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + selectPeople.id + ".jpg";
    const handleOnErrorImg = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };

    if (!selectPeople.id) {
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
                                <h1>{selectPeople.name}</h1>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-2">
                            <h5>Name</h5>
                            <p>{selectPeople.name}</p>
                        </div>
                        <div className="col-2">
                            <h5>Height</h5>
                            <p>{selectPeople.height}</p>
                        </div>
                        <div className="col-2">
                            <h5>Birth Year</h5>
                            <p>{selectPeople.birth_year}</p>
                        </div>
                        <div className="col-2">
                            <h5>Eye Color</h5>
                            <p>{selectPeople.eye_color}</p>
                        </div>
                        <div className="col-2">
                            <h5>Hair Color</h5>
                            <p>{selectPeople.hair_color}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
        }
}