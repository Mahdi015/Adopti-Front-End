import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { auth, GoogleAuthProvider } from "../../Firebase";
import { Button } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { GoogleOutlined, MailOutlined } from "@ant-design/icons";

export const SignUp = ({ history }) => {
  const [email, setemail] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.name) {
      history.push("/");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      // url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      url: "http://localhost:3000/signupcomplete",
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email} ,  Click the link to complete your registration.`
    );
    window.localStorage.setItem("emailRegistration", email);
    setemail("");
  };
  const googlelogin = () => {
    auth
      .signInWithPopup(GoogleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        // creatOrUpdateUser(idTokenResult.token)
        // .then((res)=> {
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
            //  name: res.data.name,
            //    role: res.data.role,
            //     _id: res.data._id,
          },
        });
        toast.success("Complete your registration");
        history.push("/googleregistercomplete");
        //  roleBasedRedirect(res);
        // })
        //    .catch();
        // history.push("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="container p-5 section-padding">
      <div className="row">
        <div className="col-md-8 offset-md-5">
          <h1>Sign Up</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="col-md-6 offset-md-3 pt-5">
            <label for="a">
              <h4>Email</h4>
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter email"
              autoFocus={true}
            />
            <br />
            <center>
              {" "}
              <Button
                type="primary"
                className="mb-3"
                onClick={handleSubmit}
                block
                shape="round"
                icon={<MailOutlined />}
                size="large"
                disabled={!email}
              >
                Send Email Verification{" "}
              </Button>
            </center>
            <center>
              {" "}
              <Button
                type="danger"
                className="mb-3"
                onClick={googlelogin}
                block
                shape="round"
                icon={<GoogleOutlined />}
                size="large"
              >
                SignUp With Google{" "}
              </Button>
            </center>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
