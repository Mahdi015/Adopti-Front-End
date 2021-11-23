import React, { useState, useEffect } from "react";
import { Card, CardText } from "reactstrap";
import Usersidebar from "../sidebar/usersidebar";
import {
  Form,
  Row,
  Col,
  FloatingLabel,
  Image,
  Container,
  Spinner,
} from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useSelector } from "react-redux";
import { currUser, updateUserData } from "../../functions/user";
import { toast } from "react-toastify";
import { Button } from "antd";
import Resizer from "react-image-file-resizer";
import axios from "axios";

export const Profile = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [userData, setuserData] = useState([]);
  const [loading, setloading] = useState(false);
  const [picloading, setpicloading] = useState(false);
  const inits = {
    fname: "",
    lname: "",
    phonenumber: "",
    country: "",
    adresse: "",
    adresseSec: "",
    city: "",
    state: "",
    zipcode: "",
    picture: "",
  };

  const [values, setvalues] = useState(inits);
  useEffect(() => {
    {
      user &&
        user.token &&
        currUser(user.token).then((res) => {
          setvalues({ ...values, ...res.data });
          console.log(res.data);
        });
    }
  }, [user]);
  const handlechange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };
  const handlePhoneNumberChange = (phone) => {
    setvalues({ ...values, phonenumber: phone });
  };

  const handleSubmit = () => {
    setloading(true);
    updateUserData(user.token, values, values._id)
      .then((res) => {
        setloading(false);
        toast.success("Profile Updated");
        console.log(res);
      })
      .catch((err) => {
        setloading(false);
        toast.error(`${err.message}`);
      });
  };
  const handleImageEdit = (e) => {
    console.log(e);
    let file = e.target.files;

    try {
      if (file) setpicloading(true);

      for (let i = 0; i < file.length; i++) {
        Resizer.imageFileResizer(
          file[i],
          300,
          300,
          "JPEG",
          100,
          0,
          (uri) => {
            // console.log(uri)
            axios
              .post(
                `${process.env.REACT_APP_API}/uploadimages`,
                { image: uri },
                {
                  headers: {
                    authtoken: user.token,
                  },
                }
              )
              .then((res) => {
                setpicloading(false);
                setvalues({ ...values, picture: res.data.url });
                toast.success("Click Apply Changed To Save");
              })
              .catch((err) => {
                setpicloading(false);
                console.log("Cloudinary Error", err);
              });
          },
          "base64 "
        );
      }
    } catch (err) {
      toast.error(`${err.message}`);
      setpicloading(false);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 pt-4">
          <Card>
            <Usersidebar />
          </Card>
        </div>
        <div className="col-md-6 offset-md-2 pt-4 pb-4">
          <Card>
            <Form>
              <CardText className="userprofiletext pt-2 pl-4">
                Profile Picture
              </CardText>

              <Container>
                <Row>
                  <Col className="pt-2" xs={2} md={2}>
                    <Image src={values.picture} roundedCircle />
                  </Col>
                </Row>
                <Row>
                  <Col className="pt-4">
                    {picloading ? (
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden pr-2 pl-2">
                          Loading...
                        </span>
                      </Spinner>
                    ) : (
                      ""
                    )}
                    <label className="btn btn-primary btn-raised mt-3">
                      Edit
                      <center>
                        <input
                          name="pics"
                          type="file"
                          onChange={(e) => handleImageEdit(e)}
                          accept="images/*"
                          hidden
                          block
                        />{" "}
                      </center>
                    </label>
                  </Col>
                </Row>
              </Container>
              <Row className="g-2 pt-2">
                <CardText className="userprofiletext pl-4">
                  WHAT IS YOUR NAME?
                </CardText>
                <Col md className="pl-4">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="First Name"
                    className="mb-3"
                  >
                    <Form.Control
                      placeholder="First name"
                      type="text"
                      name="fname"
                      value={values.fname}
                      onChange={(e) => handlechange(e)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md className="pr-3 customMoblieFix">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Last Name"
                    className="mb-3"
                  >
                    <Form.Control
                      placeholder="Last Name"
                      type="text"
                      value={values.lname}
                      onChange={(e) => handlechange(e)}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="g-2 pt-2">
                <CardText className="userprofiletext pl-4">
                  HOW CAN YOU BE REACHED?
                </CardText>
                <Col md className="pl-4">
                  <PhoneInput
                    enableSearch
                    enableAreaCodes={false}
                    country={"tn"}
                    value={values.phonenumber}
                    onChange={(phone) => handlePhoneNumberChange(phone)}
                    autoFormat={false}
                    inputProps={{
                      name: "phonenumber",
                    }}
                  />
                </Col>
              </Row>
              <Row className="g-2 pt-2">
                <CardText className="userprofiletext pl-4">
                  WHERE DO YOU LIVE?
                </CardText>
                <Col md className="pl-4 pr-3">
                  <Form.Select
                    aria-label="Default select example"
                    value={values.country}
                    name="country"
                    onChange={(e) => handlechange(e)}
                  >
                    <option>Chose Country</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Moroco">Moroco</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="g-2 pt-2">
                <Col md className="pl-4">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Street Adresse"
                    className="mb-3"
                  >
                    <Form.Control
                      placeholder="Street Adresse"
                      type="text"
                      value={values.adresse}
                      name="adresse"
                      onChange={(e) => handlechange(e)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md className="pr-3 customMoblieFix">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Street Adresse (Continued)"
                    className="mb-3"
                  >
                    <Form.Control
                      placeholder="Street Adresse(Continued)"
                      type="text"
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="g-2 pt-2">
                <Col md className="pl-4">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="City Town"
                    className="mb-3"
                  >
                    <Form.Control
                      placeholder="City Town"
                      type="text"
                      value={values.city}
                      name="city"
                      onChange={(e) => handlechange(e)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md className="pr-3 customMoblieFix">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="State"
                    className="mb-3"
                  >
                    <Form.Control
                      placeholder="State"
                      type="text"
                      value={values.state}
                      name="state"
                      onChange={(e) => handlechange(e)}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="g-2 pt-2">
                <Col md className="pl-4 pr-3">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="ZIP Code"
                    className="mb-3"
                  >
                    <Form.Control
                      placeholder="ZIP Code"
                      type="number"
                      name="zipcode"
                      value={values.zipcode}
                      onChange={(e) => handlechange(e)}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <center>
                <Button onClick={handleSubmit} type="primary">
                  Apply Changes
                </Button>
                {loading ? (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  ""
                )}
              </center>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
