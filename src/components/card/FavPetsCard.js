import React from "react";
import "./PetCard.css";
import { useHistory } from "react-router-dom";
const FavPetsCard = ({ p, removePet, token }) => {
  let history = useHistory();
  const { pics, petname, breed, petage, petcolor, slug } = p;
  return (
    <div style={{ backgroundImage: `url(${pics[0].url})` }} className="petcard">
      <div className="petcard-content">
        <h2 className="petcard-text">{petname}</h2>
        <p className="petcard-body">
          {breed}, {petage}, {petcolor}
        </p>
        <div className="petcard-media">
          <a
            href="#"
            className="petcard-button"
            onClick={() => history.push(`/pets/${slug}`)}
          >
            Adopt Me <i style={{ marginLeft: "3px" }} class="fas fa-paw"></i>
          </a>
          <a style={{ color: "#82b440" }} className="love-button">
            <i
              onClick={() => removePet(token, p._id, petname)}
              style={{ cursor: "pointer" }}
              class="fas fa-trash-alt"
            ></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FavPetsCard;
