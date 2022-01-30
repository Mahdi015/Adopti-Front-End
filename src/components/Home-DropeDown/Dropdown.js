import React, { useState, useRef } from "react";

export default function Dropdown() {
  const catMenu = useRef(null);
  const [isActive, setisActive] = useState(false);
  const closeOpenMenus = (e) => {
    if (catMenu.current && isActive && !catMenu.current.contains(e.target)) {
      setisActive(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);
  return (
    <div id="title" ref={catMenu} className="FindPetdropdown">
      <div
        onClick={() => setisActive(!isActive)}
        className="FindPetdropdown-btn"
      >
        <div className="noselect" style={{ whiteSpace: "nowrap" }}>
          Chose One
        </div>{" "}
        <i class="fas fa-caret-down"></i>
      </div>
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
