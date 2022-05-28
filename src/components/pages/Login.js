import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { auth, GoogleAuthProvider, FacebookAuthProvider } from "../../Firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  FacebookOutlined,
  GoogleOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "antd/dist/antd.css";
import { checkUser } from "../../functions/user";

export const Login = ({ history }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.token) {
      history.push("/");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        console.log(result);
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
            //   name: res.data.name,
            //   role: res.data.role,
            //   _id: res.data._id,
          },
        });
        toast.success("Logged In");
        history.push("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const facebooklogin = () => {
    auth
      .signInWithPopup(FacebookAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        checkUser(idTokenResult.token)
          .then((res) => {
            if (res.data.ok) {
              dispatch({
                type: "LOGGED_IN_USER",
                payload: {
                  email: user.email,
                  token: idTokenResult.token,
                  //    name: res.data.name,
                  //     role: res.data.role,
                  //      _id: res.data._id,
                },
              });
              console.log("Complete Your Registration");
              history.push("/googleregistercomplete");
            } else {
              dispatch({
                type: "LOGGED_IN_USER",
                payload: {
                  email: res.data.email,
                  token: idTokenResult.token,
                  name: res.data.name,
                  role: res.data.role,
                  _id: res.data._id,
                },
              });
              console.log("User Already Registred");
              history.push("/");
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const googlelogin = () => {
    auth
      .signInWithPopup(GoogleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        checkUser(idTokenResult.token)
          .then((res) => {
            if (res.data.ok) {
              dispatch({
                type: "LOGGED_IN_USER",
                payload: {
                  email: user.email,
                  token: idTokenResult.token,
                  //    name: res.data.name,
                  //    role: res.data.role,
                  //    _id: res.data._id,
                },
              });

              history.push("/googleregistercomplete");
            } else {
              dispatch({
                type: "LOGGED_IN_USER",
                payload: {
                  email: res.data.email,
                  token: idTokenResult.token,
                  name: res.data.name,
                  role: res.data.role,
                  _id: res.data._id,
                },
              });
              console.log("User Already Registred");
              history.push("/");
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <center>
            {" "}
            <h4>Login</h4>{" "}
          </center>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="email">
                <h4>Email</h4>
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter email"
                autoFocus={true}
              />
              <br />
            </div>
            <div className="form-group">
              <label for="password">
                <h4>Password</h4>
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Enter First Name"
                autoFocus={true}
              />
              <br />
            </div>
            <br></br>
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
                disabled={!email || password.length < 6}
              >
                Login With E-mail /Password{" "}
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
                Login With Google{" "}
              </Button>
            </center>
            <center>
              {" "}
              <Button
                type="default"
                className="mb-3"
                onClick={facebooklogin}
                block
                shape="round"
                icon={<FacebookOutlined />}
                size="large"
              >
                Login With Facebook{" "}
              </Button>
            </center>
            <Link to="/forgetpass" className="float-right text-danger">
              {" "}
              Forgot Password ?
            </Link>{" "}
            <br></br>
            <Link to="/sign-up" className="float-right text-blue">
              {" "}
              Create an Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
