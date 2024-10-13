// Components/Card/Card.js
import React from "react";
import "./Card.css";

function Card({ src, title, desc, price }) {
  return (
    <div className="card">
      <img src={src} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{desc}</p>
      <p className="price">
        Price: <span>{price}</span>
      </p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Card;
