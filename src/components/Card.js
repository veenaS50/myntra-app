import React from 'react'
import "./Card.css"

function Card(props){
    return (
        <div className="card-container">
            <div className="image-container">
            <img src={props.imageURL} alt=""/>
            </div>

            <h3>{props.productName}</h3>
            <p>{props.discount}</p>

        </div>
    )
}

export default Card