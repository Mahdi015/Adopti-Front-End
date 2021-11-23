import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo1 from "../logo1.png";
import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { currUser } from "../functions/user";

const Navbars = () => {
  let history = useHistory();
  const [adminVar, setadminVar] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const logout = () => {
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
  return (
    <>
      <Navbar
        className="justify-content-end"
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand>
          <img src={logo1} width="70px" height="70px" /> Adopti
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href="/how-it-works">How It Work</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Find a Pet">
              <NavDropdown.Item href="/search/cats">
                Find a Cat
              </NavDropdown.Item>
              <NavDropdown.Item href="/search/cats">
                Find a Dog
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item> */}
            </NavDropdown>

            <Nav.Link href="/aboutus">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {user && (
              <>
                <Nav.Link
                  className="custondropdown"
                  title="Favorites Pets"
                  href="/favorites"
                >
                  <i class="fas fa-heart fa-2x"></i>
                </Nav.Link>
                <NavDropdown className="custondropdown" title={user.fname}>
                  <NavDropdown.Item href="/user/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/petrehome">
                    Rehome Pet
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>LogOut</NavDropdown.Item>
                  {adminVar && (
                    <NavDropdown.Item title="Admin Dashboard" href="/admindash">
                      <span>
                        <i class="fas fa-user-lock "> </i> Admin <br />{" "}
                        Dashboard
                      </span>
                    </NavDropdown.Item>
                  )}{" "}
                </NavDropdown>
              </>
            )}
            {!user && <Nav.Link href="/login">Log In</Nav.Link>}
            {user ? "" : <Nav.Link href="/sign-up">Sign Up</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbars;
