import React, { useState, useRef } from "react";

export default function CityDropdown({ findCity }) {
  const [isActive, setisActive] = useState(true);
  const closeOpenMenus = (e) => {
    if (findCity.current && isActive && !findCity.current.contains(e.target)) {
      setisActive(false);
    }
    if (findCity.current && !isActive && findCity.current.contains(e.target)) {
      setisActive(true);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);
  return (
    <div className="FindPetdropdown-city">
      {isActive && (
        <div
          onMouseDown={() => setisActive(false)}
          className="FindPetdropdown-content"
        >
          <div className="FindPetdropdown-item">
            <span className="noselect">Rabbit</span>
          </div>
          <div className="FindPetdropdown-item">
            {" "}
            <span className="noselect">Turtle</span>
          </div>
        </div>
      )}
    </div>
  );
}
