import { useState } from "react";
import "./Login.css";

import SellerService from '../../services/SellerService';

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [enteredNic, setEnteredNic] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const loginNicChangeHandler = (event) => {
    setEnteredNic(event.target.value);
  }

  const loginPwdChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  }

  const loginFormSubmitHandler = (event) => {
    event.preventDefault();
    const loginformData = {
      nic: enteredNic,
      password: enteredPassword
    };

    setLoginSuccess(SellerService.checkLogin(loginformData));

  }

  return (
    <section className="login-clean">
      <form onSubmit={loginFormSubmitHandler} method="post">
        <h2 className="sr-only">Login Form</h2>
        <div className="illustration">
          <i className="icon ion-ios-navigate"></i>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="nic"
            onChange={loginNicChangeHandler}
            placeholder="Enter NIC"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={loginPwdChangeHandler}
            placeholder="Enter Password"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block" type="submit">
            Log In
          </button>
        </div>
        <a className="forgot" href="#">
          Forgot your password?
        </a>
      </form>
    </section>
  );
};

export default Login;
