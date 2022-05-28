import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createUser } from "../../functions/user";
import { auth } from "../../Firebase";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
export const GoogleResterComplete = ({ history }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [adresse, setadresse] = useState("");
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  useEffect(() => {
    user && setemail(user.email);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validation
    if (!email || !password) {
      toast.error("Email and Password Required");
      return;
    }
    if (password.length < 6) {
      toast.error("Password Must Be At Least 6 Charachters");
      return;
    }
    if (password !== confirmpassword) {
      toast.error("Password Not Match");
      return;
    }
    if (!firstname || !lastname) {
      toast.error("First Name and Last Name Require");
      return;
    }

    createUser(user.token, firstname, lastname, adresse)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: res.data.email,
            token: user.token,
            name: res.data.fname,
            role: res.data.role,
            _id: res.data._id,
          },
        });
        const userAuth = firebase.auth().currentUser;
        userAuth
          .updatePassword(password)
          .then(() => {
            console.log("Password set");
          })
          .catch((error) => {
            console.log(error.message);
            // ...
          });
        toast.success("Account Created Succsfully");
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-8 offset-md-4  pt-2">
          <h1>Sign Up Complete</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="col-md-6 offset-md-3 pt-5">
            <label for="a">
              <h4>Email</h4>
            </label>
            <input
              type="email"
              className="form-control"
              disabled
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter email"
            />
            <br />
            <label for="a">
              <h4>First Name</h4>
            </label>
            <input
              type="text"
              className="form-control"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
              placeholder="Enter First Name"
              autoFocus={true}
            />
            <br />
            <label for="a">
              <h4>Last Name</h4>
            </label>
            <input
              type="text"
              className="form-control"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
              placeholder="Enter Last Name"
            />
            <br />
            <label for="a">
              <h4>Password</h4>
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter Password"
            />
            <br />
            <label for="a">
              <h4>Confirm Password</h4>
            </label>
            <input
              type="password"
              className="form-control"
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
              placeholder="Confirm Your Password"
            />
            <br />
            <label for="a">
              <h4>Adresse</h4>
            </label>
            <input
              type="text"
              className="form-control"
              value={adresse}
              onChange={(e) => setadresse(e.target.value)}
              placeholder="Enter Your Adresse"
            />
            <br />
            <center>
              <button type="submit" class="btn btn-secondary">
                Register
              </button>
            </center>
          </div>
        </form>
      </div>
    </div>
  );
};
export default GoogleResterComplete;
