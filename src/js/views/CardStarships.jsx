import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';


export const CardStarships = ({ id, name, model, manufacturer, cost_in_credits, length, crew, passengers }) => {
    const { store, actions } = useContext(Context);
    const starship = store.starship;
    const favorites = store.favorites

    const urlImage = "https://starwars-visualguide.com/assets/img/starships/" + id + ".jpg";
    const handleOnErrorImg = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    }


    return (
        <div className="col">
            <div className="card border-dark my-3 mx-2 text-bg-dark">
                <img alt="" src={urlImage} onError={handleOnErrorImg}></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Model: {model}</p>
                    <p className="card-text">Manufacturer: {manufacturer} </p>
                    <p className="card-text">Clost in credits: {cost_in_credits} </p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/starships/${id}`} className="btn btn-secondary" 
                            onClick={() => actions.getStarship({ id: id, name: name, model: model, manufacturer: manufacturer, cost_in_credits: cost_in_credits, length: length, crew: crew, passengers: passengers })}>
                                Details
                        </Link>
                        <Link className="btn btn-outline-warning" 
                            onClick={() => actions.addFavorite({ id, type: 'Starships', name }, favorites)}>
                                <i className="far fa-heart fa-lg"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

