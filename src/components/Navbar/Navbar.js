import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { currUser } from "../../functions/user";

const Navbar = () => {
  let history = useHistory();
  const [adminVar, setadminVar] = useState(false);
  const [location, setlocation] = useState("");
  const [profileDropdown, setprofileDropdown] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    setadminVar(false);
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };
  useEffect(() => {
    user &&
      user.token &&
      currUser(user.token).then((res) => {
        console.log(res.data);
        if (res.data != null && res.data.role === "Admin") {
          setadminVar(true);
        }
      });
  }, [user]);
  useEffect(() => {
    setlocation(history.location.pathname);
  }, []);

  return (
    <div className={location === "/" ? "mynav " : "mynav nothome"}>
      <div className="nav-left">
        <a href="#">Logo</a>
        <a href="/">Home</a>
        <a href="/search/cats">Find Cat</a>
        <a href="/search/cats">Find Dog</a>
        <a href="/how-it-works">How it works</a>
        <a href="#">Abouts Us</a>
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <span> Logged In As</span>{" "}
            <a
              onClick={() => setprofileDropdown(!profileDropdown)}
              style={{ padding: "10px" }}
              href="#"
            >
              {" "}
              {user.fname}
              <i style={{ marginLeft: "5px" }} class="fas fa-user-circle"></i>
            </a>
            <a style={{ padding: "10px" }} href="/messenger">
              <i class="fas fa-envelope-open-text"></i>
            </a>
            <a style={{ padding: "10px" }} href="/favorites">
              <i class="fas fa-heart"></i>
            </a>
            {profileDropdown && (
              <div className="profile-dropdow scale-up-center">
                <a href="/user/profile">Profile</a>
                <a href="/petrehome">Rehome Pet</a>
                {adminVar && <a href="/admindash">Admin Dash</a>}
                <a onClick={(e) => logout(e)} href="#">
                  Logout
                </a>
              </div>
            )}
          </>
        ) : (
          <>
            {" "}
            <a className="mynav-button" href="/login">
              Login
            </a>
            <a className="mynav-button" href="/sign-up">
              Registre
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
