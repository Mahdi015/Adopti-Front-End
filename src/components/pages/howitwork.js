import React from "react";
import { List } from "reactstrap";
import rehome from "../../images/rehome.jpg";
import review from "../../images/review.PNG";
import meet from "../../images/meet.PNG";
import final from "../../images/final.PNG";
import Button from "antd-button-color";

const Howitwork = ({ history }) => {
  return (
    <div className="container-fluid section-padding">
      <div className="row">
        <div className="col">
          <h1 className="custedmedtext">How It Works</h1>
          <hr className="customhr" />
        </div>
      </div>
      <div className="row">
        {/* <Form>
                    <FormGroup> */}

        <div className="col-md-6 offset-md-1">
          <h1 className="customh1">1. Create a Account</h1>
        </div>
        {/* </FormGroup>
                    <FormGroup> */}
        <div className="col-md-6 offset-md-1">
          <p className="custedemdp">
            Create a Account on Adopti.tn in minutes and <br />
            manage your dashboard. Use your dashboard to:
          </p>
          <List type="unstyled">
            <li>- Create And Edit Pet Rehome Posts</li>
            <li>- Review adopter applications</li>
            <li>- Respond to adopter questions</li>
            <li>- Upload pet records</li>
            <li>- Submit adoption paperwork</li>
          </List>
        </div>

        {/* </FormGroup>
                </Form> */}
        <div className="col-sm">
          <div className="customdiv">
            <img
              className="responsive"
              src={rehome}
              style={{
                width: "100%",
                overflow: "hidden",
                paddingBottom: "10px",
              }}
            ></img>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <hr className="customhr" />
      <div className="row">
        <div className="col-sm pt-4">
          <div className="customdiv">
            <img
              className="responsive"
              src={review}
              style={{
                width: "80%",
                overflow: "hidden",
                paddingBottom: "10px",
                paddingLeft: "80px",
              }}
            ></img>
          </div>
        </div>

        <div className="col-md-5">
          <h1 className="customh1">2. Review Applications</h1>
          <p className="custedemdp">
            Finding a new home for your pet can feel like a <br />
            big decision. We’ll make sure you’re not alone.
          </p>
          <List type="unstyled">
            <li>
              - We'll notify you when you have a new application to review.
            </li>
            <li>
              - If you aren't 100% confident in your ability to choose the right
              adopter, we have question-by-question screening guidance right on
              the application page, so you can see which answers are great,
              which are not-so-great, and which ones might require follow-up
              questions.
            </li>
            <li>- Respond to adopter questions</li>
          </List>
        </div>
      </div>

      <hr />

      <div className="row">
        {/* <Form>
                    <FormGroup> */}

        <div className="col-md-6 offset-md-1 ">
          <h1 className="customh1">3. Meet Adopters</h1>
        </div>
        {/* </FormGroup>
                    <FormGroup> */}
        <div className="col-md-6 offset-md-1">
          <p className="custedemdp">
            After you screen the application, it’s time to meet the adopter!
            <br /> We’ll give you all the tips you need for conducting a safe
            and effective meeting.
          </p>
        </div>

        {/* </FormGroup>
                </Form> */}
        <div className="col-sm">
          <div className="customdiv">
            <img
              className="responsive"
              src={meet}
              style={{
                width: "100%",
                overflow: "hidden",
                paddingBottom: "10px",
              }}
            ></img>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm pb-4">
          <div className="customdiv">
            <img
              className="responsive"
              src={final}
              style={{
                width: "80%",
                overflow: "hidden",
                paddingBottom: "10px",
                paddingLeft: "80px",
              }}
            ></img>
          </div>
        </div>

        <div className="col-md-5 pt-5">
          <h1 className="customh1">4. Finalize Adoption</h1>
          <p className="custedemdp">
            Adopti.Tn gives you a personalized adoption
            <br /> agreement that you and your adopter can sign online.
          </p>
          <List type="unstyled">
            <li>
              - You’ll even be able to specify what you want to happen if the
              adoption doesn’t work out (rest assured, most adoptions are
              successful): if you want the pet returned to you or you want the
              adopter to find a new home for the pet.
            </li>
            <li>
              - Your adopter will be able to download any medical or microchip
              records you supply
            </li>
            <li>
              - Finally, the adopter can submit their adoption fee online, which
              we’ll pass along to the rescue or shelter of your choice.
            </li>
          </List>
        </div>
      </div>
      <hr />
      <div className="pt-4 pb-4 ">
        <center>
          {" "}
          <h1>Create Account And Find New Home For Your Pet</h1>
          <Button onClick={() => history.push("/sign-up")} type="primary">
            Sign Up For Adopti
          </Button>{" "}
        </center>
      </div>
    </div>
  );
};
export default Howitwork;
