import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer } from "react-toastify";
import "./App.css";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { currUser } from "./functions/user";

//////////////////////Routes////////////////////////////

import UserRoutes from "./routes/userRoutes";
import AdminRoutes from "./routes/adminRoutes";

//////////////////////////////////////////////////

import SignUp from "./components/pages/SignUp";
import Navbars from "./components/Navbar";
import Home from "./components/pages/Home";
import SignUpComplete from "./components/pages/SignUpComplete";
import Login from "./components/pages/Login";
import ForgotPassword from "./components/pages/ForgetPassword";
import googleResterComplete from "./components/pages/googleResterComplete";
import MultiForm from "./components/MultiFormComponents/MultiForm";
import Footer from "./components/footer/footer";
import admindash from "./components/pages/admindash";
import AdminAccountmangment from "./components/pages/adminAccountmangment";
import Findcat from "./components/pages/findcat";
import Howitwork from "./components/pages/howitwork";
import Profile from "./components/pages/profile";
import Mypets from "./components/pages/mypets";
import Petwishlist from "./components/pages/petwishlist";
import Viewpet from "./components/pages/viewpet";
import Intreducemyself from "./components/pages/intreducemyself";
import Applicationpage from "./components/pages/applicationpage";
import Adopterprofile from "./components/pages/Adopterprofile";
import ChatPage from "./components/ChatPage/chatPage";
import Navbar from "./components/Navbar/Navbar";
//////////////////////////////////////////////////

function App() {
  const dispatch = useDispatch();
  //check firebase auth state
  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log(user);
        currUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                email: user.email,
                token: idTokenResult.token,
                fname: res.data.fname,
                role: res.data.role,
                _id: res.data._id,
              },
            });
            console.log("Dispatched");
            localStorage.setItem("token", idTokenResult.token);
          })
          .catch((err) => console.log(err));
      }
    });
    return () => unsuscribe();
  }, [dispatch]);

  //////////////////////////////////////////////////

  return (
    <Router>
      {/* <Navbars /> */}
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/signupcomplete" component={SignUpComplete} />
        <Route path="/forgetpass" component={ForgotPassword} />
        <Route
          path="/googleregistercomplete"
          component={googleResterComplete}
        />
        <Route path="/pets/:slug" exact component={Viewpet} />
        <UserRoutes path="/petrehome" component={MultiForm} />
        <AdminRoutes path="/admindash" component={admindash} />
        <Route path="/admin/acounts" component={AdminAccountmangment} />
        {/* <Route path='/completepetpost' component={Completepetpost} /> */}
        <Route path="/search/cats" component={Findcat} />
        <Route path="/how-it-works" component={Howitwork} />
        <UserRoutes path="/user/profile" component={Profile} />
        <UserRoutes exact path="/user/mypets" component={Mypets} />
        <UserRoutes path="/favorites" component={Petwishlist} />
        <Route
          path="/pets/:slug/introduce-myself"
          exact
          component={Intreducemyself}
        />
        <UserRoutes
          path="/user/mypets/:slug/applications"
          exact
          component={Applicationpage}
        />
        <UserRoutes
          path="/user/adopter-profile"
          exact
          component={Adopterprofile}
        />
        <UserRoutes path="/messenger" exact component={ChatPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
