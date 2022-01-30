import React, { Component } from "react";
import {
  Form,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import ProgresseBar from "./ProgresseBar";
import { createPet } from "../../functions/pet";
import { toast } from "react-toastify";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "antd-button-color/dist/css/style.css"; // or 'antd-button-color/dist/css/style.less'
import Button from "antd-button-color";

class MultiForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      qs1: "",
      qs2: "",
      qs3: "",
      qs4: "",
      phonenumber: "5656556",
      zipcode: "3021",
      city: "Sfax",
      state: "Sfax",
      petname: "Souchi",
      breed: "sqdsqd",
      petgender: "qsdqsd",
      petage: "2",
      petcolor: "sdqsd",
      coatlength: "Meduim",
      pics: [],
      qs6: "Yes",
      qs7: "Yes",
      qs8: "Yes",
      petstory:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      petdiet:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      button: "No",
      loading: "false",
    };

    // Bind the submission to handleChange()

    this.handleChange = this.handleChange.bind(this);
    this.handleImagesUpload = this.handleImagesUpload.bind(this);
    this.handleremoveimage = this.handleremoveimage.bind(this);
    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.token = localStorage.getItem("token");
  }
  pushFunction() {
    this.props.history.push("/");
  }
  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleImagesUpload(e) {
    let files = e.target.files;
    let alluploadedfiles = this.state.pics;
    if (files)
      this.setState({
        loading: "true",
      });
    for (let i = 0; i < files.length; i++) {
      Resizer.imageFileResizer(
        files[i],
        720,
        720,
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
                  authtoken: this.token,
                },
              }
            )
            .then((res) => {
              this.setState({
                loading: "false",
              });
              console.log("Image Res", res);
              alluploadedfiles.push(res.data);
              this.setState({
                pics: alluploadedfiles,
              });
            })
            .catch((err) => {
              this.setState({
                loading: "false",
              });
              console.log("Cloudinary Error", err);
            });
        },
        "base64 "
      );
    }
  }

  handleremoveimage = (public_id) => {
    this.setState({
      loading: "true",
    });
    axios
      .post(
        `${process.env.REACT_APP_API}/removeimage`,
        { public_id },
        {
          headers: {
            authtoken: this.token,
          },
        }
      )
      .then((res) => {
        this.setState({
          loading: "false",
        });
        let images = this.state.pics;
        let filtredimages = images.filter((item) => {
          return item.public_id !== public_id;
        });

        this.setState({
          pics: filtredimages,
        });
      })
      .catch((err) => {
        this.setState({
          loading: "false",
        });
        console.log("Cloudinary Error", err);
      });
  };

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault();
    createPet(this.state, this.token)
      .then((res) => {
        console.log(res);
        toast.success(
          `Pet Post for ${res.data.petname} Requested Wait Admin To Review And Publish It`
        );
        this.pushFunction();
      })
      .catch((error) => {
        toast.error("Invalid Champ Or Pet Alreaddy Added");
      });
  };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2,3 then add one on "next" button click
    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
      button: "No",
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        // <Button color="secondary float-left" onClick={this._prev}>
        //   Previous
        // </Button>
        <Button type="primary float-left" size="large" onClick={this._prev}>
          Previous
        </Button>
      );
    }

    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 4) {
      return (
        <Button
          type="primary float-right"
          size="large"
          disabled={this.state.pics.length < 2 && currentStep == 3}
          onClick={this._next}
        >
          Next
        </Button>
      );
    }
    // ...else render nothing
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 3) {
      return (
        <Button
          onClick={this.handleSubmit}
          disabled={this.state.button == "No"}
          type="primary float-right"
          size="large"
        >
          Submit
        </Button>
      );
    }
    // ...else render nothing
    return null;
  }
  render() {
    return (
      <>
        <div className="container section-padding">
          <div className="row">
            <div className="col-md-6 offset-md-3 pt-5 mb-5">
              <Form onSubmit={this.handleSubmit}>
                <Card>
                  <CardHeader>Rehome Your Pet</CardHeader>
                  <CardBody>
                    <CardTitle>
                      <ProgresseBar currentStep={this.state.currentStep} />
                    </CardTitle>
                    <CardText />
                    <Form1
                      currentStep={this.state.currentStep}
                      handleChange={this.handleChange}
                      qs1={this.state.qs1}
                      qs2={this.state.qs2}
                      qs3={this.state.qs3}
                      qs4={this.state.qs4}
                    />
                    <Form2
                      currentStep={this.state.currentStep}
                      handleChange={this.handleChange}
                      phonenumber={this.state.phonenumber}
                      zipcode={this.state.zipcode}
                      city={this.state.city}
                      state={this.state.state}
                    />
                    <Form3
                      currentStep={this.state.currentStep}
                      handleChange={this.handleChange}
                      handleremoveimage={this.handleremoveimage}
                      handleImagesUpload={this.handleImagesUpload}
                      petname={this.state.petname}
                      breed={this.state.breed}
                      petgender={this.state.petgender}
                      petage={this.state.petage}
                      coatlength={this.state.coatlength}
                      pics={this.state.pics}
                      qs6={this.state.qs6}
                      qs7={this.state.qs7}
                      qs8={this.state.qs8}
                      petstory={this.state.petstory}
                      petdiet={this.state.petdiet}
                      loading={this.state.loading}
                    />
                    <Form4
                      currentStep={this.state.currentStep}
                      handleChange={this.handleChange}
                      phonenumber={this.state.phonenumber}
                      zipcode={this.state.zipcode}
                      city={this.state.city}
                      state={this.state}
                      button={this.state.button}
                    />
                  </CardBody>
                  <CardFooter>
                    {this.previousButton}
                    {this.nextButton}
                    {this.submitButton}
                  </CardFooter>
                </Card>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MultiForm;
