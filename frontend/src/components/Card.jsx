import React from "react";
import "../styles/Card.css";
const Card = ({ title, img, desc, id, onClick }, props) => {
  return (
    <div onClick={onClick} className="d-flex justify-content-center mb-3 ">
      <div class="card text-white bg-secondary shadow">
        <img src={img} class="card-img-top" alt={title} height={400} />
        <p className="mx-auto  my-auto">
          {title.slice(0, 30)} {title.length > 29 ? "..." : ""}
        </p>
        {/* <div class="card-body text-white">
          <p class="card-text">{desc}</p>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
