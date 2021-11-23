import React, { useState } from "react";
import { useHistory } from "react-router";
import { getPetApplication } from "../functions/pet";

export const PetApplicationCount = ({ user, petId, petname }) => {
  const history = useHistory();
  const [count, setcount] = useState(0);
  getPetApplication(user.token, petId).then((res) => {
    setcount(res.data.length);
  });
  return (
    <div>
      {count}{" "}
      <i
        onClick={() => history.push(`/user/mypets/${petname}/applications`)}
        style={{ cursor: "pointer" }}
        class="fas fa-clipboard-list"
      ></i>
    </div>
  );
};
export default PetApplicationCount;
