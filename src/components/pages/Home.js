import React, { useEffect, useState } from "react";
import "../../App.css";
import Jumbotron from "../jumbotron";
import PetCard from "../card/card";
import Slider from "../Slider";
import { listApprovedPets, listPets, petLove } from "../../functions/pet";
import Loadingcard from "../card/loadingcard";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "antd-button-color/dist/css/style.css"; // or 'antd-button-color/dist/css/style.less'
import Button from "antd-button-color";

export default function Home({ history }) {
  const [pets, setpets] = useState([]);
  const [petsbylove, setpetsbylove] = useState([]);
  const [loading, setloading] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));

  const loadpets = () => {
    setloading(true);
    listApprovedPets("createdAt", "desc", 3).then((res) => {
      setloading(false);
      setpets(res.data);
      console.log(res.data);
    });
  };
  const loadpetsbylove = () => {
    setloading(true);
    listApprovedPets("petlove", "desc", 3).then((res) => {
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

  return (
    <>
      <Slider />

      {/* <br/>
<br/>
<br/>
<br/> */}

      <h1 className="homepagecustomh1 pt-5">Newest Pets</h1>

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
          <div className="row">
            {pets.map((p) => (
              <div key={pets._id} className=" col-md-3 m-5">
                <PetCard handlepetlove={handlepetlove} p={p} />
              </div>
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

      <h1 className="homepagecustomh1">Feautred Pets</h1>

      <div className="container">
        {loading ? (
          <div className="row">
            {pets.map((p) => (
              <div key={p._id} className=" col-md-3 m-5">
                <Loadingcard />
              </div>
            ))}
          </div>
        ) : (
          <div className="row">
            {petsbylove.map((pl) => (
              <div key={pl._id} className=" col-md-3 m-5">
                <PetCard handlepetlove={handlepetlove} p={pl} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
