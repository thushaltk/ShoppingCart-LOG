import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Header.css";

var cItems = [];

const Header = (props) => {
  props.cart.map((item) => {
    cItems = item;
  });
  let history = useHistory();

  const gotoLogin = () => {
    history.push("/login");
    window.location.reload();
  }

  return (
    <nav className="navbar navbar-light navbar-expand-md navigation-clean-button ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          LOGShop
        </Link>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactUs">
                Contact us
              </Link>
            </li>
          </ul>
          <span className="navbar-text actions">
            <Link className="login" to="/cart">
              <i className="icon ion-android-cart"></i>
              <span className="cartNo">{cItems.length}</span>
            </Link>
            <button onClick={gotoLogin} className="btn btn-primary login">
              {(localStorage.getItem("sName")) !== null ? "Logout" : "Login"}
            </button>
            <Link
              className="btn btn-success action-button"
              role="button"
              to="/signup"
            >
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
