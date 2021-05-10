import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import BuyerService from "../../services/BuyerService";

import './BuyerRegister.css'

const BuyerRegister = () => {
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [pwdMatchText, setPwdMatchText] = useState("");
    const [pwdMsgColor, setPwdMsgColor] = useState("");
    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredMobileNo, setEnteredMobileNo] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [enteredConfPassword, setEnteredConfPassword] = useState("");
    let history = useHistory();

    const nameChangeHandler = (event) => {
      setEnteredName(event.target.value);
    };
  
    const emailChangeHandler = (event) => {
      setEnteredEmail(event.target.value);
    };
  
    const mobileNoChangeHandler = (event) => {
      setEnteredMobileNo(event.target.value);
    };
  
    const passwordChangeHandler = (event) => {
      setEnteredPassword(event.target.value);
    };
  
    const agreeTermsHandler = (event) => {
      setBtnDisabled(event.target.checked);
    };
  
    const confPasswordChangeHandler = (event) => {
      setEnteredConfPassword(event.target.value);
      if (enteredPassword !== event.target.value) {
        setPwdMatchText("Password doesnot match!!!");
        setPwdMsgColor("text-danger");
      } else {
        setPwdMatchText("Password Matched!!!");
        setPwdMsgColor("text-success");
      }
  
      if (enteredPassword === "" || enteredConfPassword === "") {
        setPwdMatchText("");
      }
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
      const formData = {
        name: enteredName,
        email: enteredEmail,
        mobileNo: enteredMobileNo,
        password: enteredPassword,
      };
  
      if (enteredPassword !== enteredConfPassword) {
        setPwdMatchText("Cannot Register. Password does not match!!!");
        setPwdMsgColor("text-danger");
        setEnteredName("");
        setEnteredEmail("");
        setEnteredMobileNo("");
        setEnteredPassword("");
        setEnteredConfPassword("");
      } else {
        //Send form data to the seller service
        BuyerService.addBuyers(formData).then((res) => {
          history.push("/login");
        });
      }
    };
  
    const clearData = () => {
      setEnteredName("");
      setEnteredEmail("");
      setEnteredMobileNo("");
      setEnteredPassword("");
      setEnteredConfPassword("");
      setPwdMatchText("");
    };
  
    return (
      <section className="buyer-register-photo">
        <div className="form-container">
          <div className="buyer-register-image-holder"></div>
          <form onSubmit={submitHandler} method="post">
            <h2 className="text-center">
              <strong>Create</strong> an account.
            </h2>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="name"
                value={enteredName}
                placeholder="Name"
                onChange={nameChangeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                value={enteredEmail}
                placeholder="Email"
                onChange={emailChangeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                name="phone"
                value={enteredMobileNo}
                placeholder="Mobile No."
                onChange={mobileNoChangeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="password"
                value={enteredPassword}
                placeholder="Password"
                onChange={passwordChangeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="password-repeat"
                value={enteredConfPassword}
                placeholder="Password (repeat)"
                onChange={confPasswordChangeHandler}
              />
            </div>
            <p className={pwdMsgColor}>{pwdMatchText}</p>
            <div className="form-group">
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    onChange={agreeTermsHandler}
                    className="form-check-input"
                    type="checkbox"
                  />
                  I agree to the license terms.
                </label>
              </div>
            </div>
            <div className="form-group">
              <button
                disabled={!btnDisabled}
                className="btn btn-primary btn-block"
                type="submit"
              >
                Sign Up
              </button>
              <button
                onClick={clearData}
                className="btn btn-success btn-block"
                type="button"
              >
                Clear
              </button>
            </div>
            <Link style={{paddingBottom: "30px"}} className="already" to="/login">
            You already have an account? Login here.
          </Link>
          <Link className=" btn-block btn btn-info" to="/signup">
            Register as a Seller
          </Link>
          </form>
        </div>
      </section>
    );
}
 
export default BuyerRegister;