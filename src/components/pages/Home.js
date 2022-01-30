import React, { useEffect, useState, useRef } from "react";
import "../../App.css";
import Jumbotron from "../jumbotron";
// import PetCard from "../card/card";
import Slider from "../Slider";
import { listApprovedPets, listPets, petLove } from "../../functions/pet";
import Loadingcard from "../card/loadingcard";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "antd-button-color/dist/css/style.css"; // or 'antd-button-color/dist/css/style.less'
import Button from "antd-button-color";
import Dropdown from "../Home-DropeDown/Dropdown";
import CityDropdown from "../Home-DropeDown/CityDropdown";
import PetCard from "../card/PetCard";
import cover from "../../images/coverr.png";
import cover2 from "../../images/cover2.png";
import art from "../../images/art.png";
import art2 from "../../images/image.png";
import section from "../../images/section.png";
import paw from "../../images/paw.png";
import catadopt from "../../images/adopt-me.png";

export default function Home({ history }) {
  const [pets, setpets] = useState([]);
  const [petsbylove, setpetsbylove] = useState([]);
  const [loading, setloading] = useState(false);
  const [city, setcity] = useState("");
  const { user } = useSelector((state) => ({ ...state }));
  const findCity = useRef(null);
  const loadpets = () => {
    setloading(true);
    listApprovedPets("createdAt", "desc", 8).then((res) => {
      setloading(false);
      setpets(res.data);
      console.log(res.data);
    });
  };
  const loadpetsbylove = () => {
    setloading(true);
    listApprovedPets("petlove", "desc", 4).then((res) => {
      setloading(false);
      setpetsbylove(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    loadpets();
    loadpetsbylove();
  }, []);

  const handlepetlove = (p) => {
    if (user && user.token) {
      petLove(user.token, p._id).then((res) => {
        if (res.data.ok) {
          toast.warning(`${p.petname} Already Loved !!`);
        } else {
          console.log(res.data);
          toast.success(`${p.petname} Loved !`);
          loadpets();
          loadpetsbylove();
        }
      });
    }
  };
  const handleCitySearch = (e) => {
    setcity(e.target.value);
  };
  return (
    <>
      {/* <Slider /> */}
      <img src={cover} className="img-cover" />
      <img className="art-img" src={art} />
      <img className="art2-img" src={art2} />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#2A4A4E",
          fontSize: "45px",
        }}
      >
        Find Pets On Your City
      </h1>
      <div className="img-cover2">
        <img src={cover2} />
      </div>
      <div className="findPetMenu">
        <ul className="ul-nav">
          <li className="customli-nav">
            <div>
              <input
                ref={findCity}
                onChange={(e) => handleCitySearch(e)}
                className="custominput"
                type="text"
                placeholder="Enter City,State,or Zip"
              ></input>
              {city.length > 0 && <CityDropdown findCity={findCity} />}
            </div>
          </li>
          <li onClick={() => history.push("/search/cats")} className="li-nav">
            <div id="icon">
              <i class="fas fa-cat fa-3x"></i>
            </div>
            <div id="title">
              <span
                onClick={() => history.push("/search/cats")}
                className="noselect"
                style={{ whiteSpace: "nowrap" }}
              >
                Find a cat
              </span>
            </div>
          </li>

          <li className="li-nav">
            <div id="icon">
              <i class="fas fa-dog fa-3x"></i>
            </div>
            <div id="title">
              <span className="noselect" style={{ whiteSpace: "nowrap" }}>
                Find a dog
              </span>
            </div>
          </li>
          <li className="li-nav">
            <div id="icon">
              <i class="fas fa-paw fa-3x"></i>
            </div>
            <Dropdown />
          </li>
        </ul>
      </div>
      <br /> <br /> <br />
      <div className="newstpet-section">
        <div className="newstpet-section-img">
          {" "}
          <img className="newstpet-section-paw" src={section} />
        </div>
        <h1>Newest Pets</h1>
        <div className="newstpet-section-paw">
          {" "}
          <img src={paw} />
        </div>
      </div>
      <div className="container">
        {loading ? (
          <div className="row">
            {pets.map((pets) => (
              <div key={pets._id} className=" col-md-3 m-5">
                <Loadingcard />
              </div>
            ))}
          </div>
        ) : (
          <div className="petcards-container">
            {pets.map((p) => (
              <>
                <PetCard handlepetlove={handlepetlove} p={p} />
              </>
            ))}
          </div>
        )}
        <div className="pb-4 ">
          <center>
            <Button
              onClick={() => history.push("/search/cats")}
              type="lightdark"
              size="large"
            >
              Show More Pets
            </Button>
          </center>
        </div>
      </div>
      <div className="newstpet-section mt-5">
        <div className="newstpet-section-img-cat">
          {" "}
          <img className="newstpet-section-cat" src={catadopt} />
        </div>
        <h1>Feautred Pets</h1>
        <div className="newstpet-section-paw">
          {" "}
          <img src={paw} />
        </div>
      </div>
      <div className="container">
        {loading ? (
          <div className="row">
            {pets.map((p) => (
              <div key={p._id} className="col-md-3">
                <Loadingcard />
              </div>
            ))}
          </div>
        ) : (
          <div className="petcards-container">
            {petsbylove.map((pl) => (
              <>
                <PetCard handlepetlove={handlepetlove} p={pl} />
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
