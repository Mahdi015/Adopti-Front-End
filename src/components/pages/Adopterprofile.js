import React, { useEffect, useState } from "react";
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
import { Card, CardText } from "reactstrap";
import { curruser } from "../../functions/auth";
import { useSelector } from "react-redux";
import { updateUserAdopterProfile } from "../../functions/user";
import { toast } from "react-toastify";
export const Adopterprofile = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [loading, setloading] = useState(false);
  const inits = {
    qs1: "",
    qs2: "",
    qs3: "",
    qs4: "",
    qs5: "",
  };
  const [values, setvalues] = useState(inits);
  useEffect(() => {
    curruser(user.token).then((res) => {
      setvalues({ ...values, ...res.data });
    });
  }, []);
  useEffect(() => {
    setloading(true);
    updateUserAdopterProfile(user.token, values)
      .then((res) => {
        console.log(res.data);
        setloading(false);
      })
      .catch((err) => {
        toast.error(`${err.message}`);
        setloading(false);
      });
  }, [values]);
  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
    toast.success("AdopterProfile Updated");
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
              <div className="p-3">
                <CardText>
                  <h3 style={{ color: "#4D4751" }}>
                    About Me{" "}
                    {loading ? (
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    ) : (
                      ""
                    )}
                  </h3>
                </CardText>
                <CardText>
                  <h4 style={{ color: "#4D4751", fontSize: "small" }}>
                    Tell us about your lifestyle and current home{" "}
                  </h4>
                </CardText>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Desired Pet"
                >
                  <Form.Select
                    value={values.qs1}
                    onChange={(e) => handleChange(e)}
                    name="qs1"
                    id="qs1"
                    aria-label="Floating label select example"
                  >
                    <option value="Cat">Cat</option>
                    <option value="Dog">Dog</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Bird">Bird</option>
                    <option value="Horse">Horse</option>
                  </Form.Select>
                </FloatingLabel>
                <br />
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Pet Owner's"
                >
                  <Form.Select
                    value={values.qs2}
                    onChange={(e) => handleChange(e)}
                    name="qs2"
                    id="qs2"
                    aria-label="Floating label select example"
                  >
                    <option value="My self">My self</option>
                    <option value="Family">Family</option>
                  </Form.Select>
                </FloatingLabel>
                <br />
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Type of pet owner"
                >
                  <Form.Select
                    value={values.qs3}
                    onChange={(e) => handleChange(e)}
                    name="qs3"
                    id="qs3"
                    aria-label="Floating label select example"
                  >
                    <option value="First Time">First Time</option>
                    <option value="Previous">Previous</option>
                    <option value="Current">Current</option>
                  </Form.Select>
                </FloatingLabel>
                <br />
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Current pet at home"
                >
                  <Form.Select
                    value={values.qs4}
                    onChange={(e) => handleChange(e)}
                    name="qs4"
                    id="qs4"
                    aria-label="Floating label select example"
                  >
                    <option value="No dogs or cats">No dogs or cats</option>
                    <option value="Cats">Cats</option>
                    <option value="Dogs">Dogs</option>
                    <option value="Cats and Dogs">Cats and Dogs</option>
                  </Form.Select>
                </FloatingLabel>
                <br />
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Private outdoor spaces"
                >
                  <Form.Select
                    value={values.qs5}
                    onChange={(e) => handleChange(e)}
                    name="qs5"
                    id="qs5"
                    aria-label="Floating label select example"
                  >
                    <option value="No dogs or cats">No yard</option>
                    <option value="A friend yard">A friend yard</option>
                    <option value="A yard">A yard</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Adopterprofile;
