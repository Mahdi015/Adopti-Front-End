import React from "react";
import "./PetCard.css";
import { useHistory } from "react-router-dom";
const PetCard = ({ p, handlepetlove }) => {
  const { pics, petname, breed, petage, petcolor, petlove } = p;
  return (
    <div style={{ backgroundImage: `url(${pics[0].url})` }} className="petcard">
      <div className="petcard-content">
        <h2 className="petcard-text">{petname}</h2>
        <p className="petcard-body">
          {breed}, {petage}, {petcolor}
        </p>
        <div className="petcard-media">
          <a href="#" className="petcard-button">
            Adopt Me <i style={{ marginLeft: "3px" }} class="fas fa-paw"></i>
          </a>
          <a style={{ color: "#82b440" }} className="love-button">
            <i
              onClick={() => handlepetlove(p)}
              style={{ color: "#82b440" }}
              class="fas fa-heart"
            >
              {"  "}
            </i>
            {petlove}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
