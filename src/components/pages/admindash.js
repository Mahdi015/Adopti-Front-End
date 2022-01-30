import React, { useState, useEffect } from "react";
import { changestatus, listPets } from "../../functions/pet";
import {
  Form,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";
import { useSelector } from "react-redux";
import CarouselAdmin from "../sliders/carouseladmin";
import { Select } from "antd";
import { toast } from "react-toastify";
import Sidedbar from "../sidebar/sidedbar";
import { Button } from "bootstrap";

const { Option } = Select;
export const Admindash = () => {
  const [pets, setpets] = useState([]);
  const [index, setindex] = useState(0);
  const { user } = useSelector((state) => ({ ...state }));

  const loadpets = () => {
    listPets("createdAt", "desc").then((res) => {
      setpets(res.data);
    });
  };

  useEffect(() => {
    loadpets();
  }, []);
  const handleChange = (petid, value) => {
    let status = value.toLocaleString();
    changestatus(user.token, petid, status)
      .then((res) => {
        console.log(res);
        toast.success("Status Changed");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const nextbutton = () => {
    window.scrollTo(0, 0);
    setindex(index + 1);
  };
  const previousbutton = () => {
    window.scrollTo(0, 0);
    setindex(index - 1);
  };

  return (
    <>
      <div className="container-fluid section-padding">
        <Sidedbar user={user} />
        <div className="row">
          {/* <div className='col'> */}

          {/* </div> */}

          <div className="col-md-5 offset-md-4 ">
            {pets[index] && (
              <Form>
                <Card>
                  <CardHeader>
                    <h3>Pet Post Review</h3>
                  </CardHeader>
                  <CardBody>
                    <CardText>
                      <h4>Pet Name : {pets[index].petname}</h4>
                    </CardText>
                    <CardText>
                      <h4>Pet Images</h4>
                    </CardText>
                    <CarouselAdmin pet={pets[index]} />
                    <hr />
                    <br />
                    <CardText>
                      <p className="pwioiuw">{pets[index].qs1}</p>
                    </CardText>
                    <CardText>
                      <p className="pwioiuw">{pets[index].qs2}</p>
                    </CardText>
                    <CardText>
                      <p className="pwioiuw">{pets[index].qs3}</p>
                    </CardText>
                    <CardText>
                      <p className="pwioiuw">{pets[index].qs4}</p>
                    </CardText>
                    <CardText>
                      <p className="pwioiuw">{pets[index].qs6}</p>
                    </CardText>
                    <CardText>
                      <p className="pwioiuw">{pets[index].qs7}</p>
                    </CardText>
                    <CardText>
                      <p className="pwioiuw">{pets[index].qs8}</p>
                    </CardText>
                    <CardText>
                      <h4>Pet Owner Info</h4>
                    </CardText>
                    <CardText>
                      <p className="pwioiuw">
                        Phone Number : {pets[index].phonenumber} / City:
                        {pets[index].city} / State{pets[index].state}
                      </p>
                    </CardText>
                    <CardText>
                      <h4>Pet Info</h4>
                    </CardText>
                    <CardText>
                      <p className="pwioiuw">
                        Pet Type : {pets[index].pettype}/Pet Gender :{" "}
                        {pets[index].petgender}/Pet Age : {pets[index].petage}
                      </p>
                    </CardText>
                    <CardText>
                      <p className="pwioiuw">
                        Pet Color : {pets[index].petcolor}/Pet Hair Length :{" "}
                        {pets[index].pethair}
                      </p>
                    </CardText>
                    <CardText>
                      <p className="pwioiuw">
                        Pet Story : {pets[index].petstory}
                      </p>
                    </CardText>
                    <CardText>
                      <p className="pwioiuw">
                        Pet Diet : {pets[index].petdiet}
                      </p>
                    </CardText>
                    <CardText>
                      <p className="pwioiuw">
                        Postod On :{" "}
                        {new Date(pets[index].createdAt).toLocaleString()}
                      </p>
                    </CardText>
                  </CardBody>

                  <CardFooter>
                    Post Status :{" "}
                    <Select
                      key={index}
                      defaultValue={pets[index].reviewStatus}
                      style={{ width: 200 }}
                      onChange={(value) => handleChange(pets[index]._id, value)}
                    >
                      <Option value="Waiting Review">Waiting Review</Option>
                      <Option value="Approved">Approved</Option>
                      <Option value="Cancelled">Cancelled</Option>
                    </Select>
                  </CardFooter>

                  {/* {index}
                            {pets.length}
                            {pets[index].reviewStatus} */}
                  {index < pets.length - 1 ? (
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={nextbutton}
                    >
                      Next Post
                    </button>
                  ) : (
                    ""
                  )}
                  {index != 0 ? (
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={previousbutton}
                    >
                      Previous Post
                    </button>
                  ) : (
                    ""
                  )}
                </Card>
              </Form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admindash;
