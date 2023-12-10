import React from "react";
const Card = ({ title, img, desc }) => {
  return (
    <div className="d-flex justify-content-center bg-info">
      <div class="card">
        <h2>{title}</h2>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
