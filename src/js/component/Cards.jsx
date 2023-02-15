import React from "react";
import { FaHeart } from "react-icons/fa";
import {GetState}
const Card = () => {
    return (
    <div className="card-deck d-flex row-cols-md-4 overflow-auto">
        <div className="card m-2">
            <img className="card-img-top" src="https://hipfonts.com/wp-content/uploads/2020/07/star-wars-logo.png" alt="Card image"/>
            <div className="card-body">
                <h5 className="card-title">Title clard</h5>
                <p className="card-text">Description</p>
                <div className="d-grid gap-4 d-md-flex">    
                    <button className="btn btn-outline-primary justify-content-start">Learn More!</button>
                    <button className="btn btn-outline-warning justify-content-end" id="heartbtn"><FaHeart /></button>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Card