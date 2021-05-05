import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import "./Register.css";

//Seller Service
import SellerService from '../../services/SellerService';

const Register = () => {
  let history = useHistory();
  const[pwdMatchText, setPwdMatchText] = useState("");
  const[pwdMsgColor, setPwdMsgColor] = useState("");
  const[enteredNic, setEnteredNic] = useState("");
  const[enteredName, setEnteredName] = useState("");
  const[enteredEmail, setEnteredEmail] = useState("");
  const[enteredMobileNo, setEnteredMobileNo] = useState("");
  const[enteredPassword, setEnteredPassword] = useState("");
  const[enteredConfPassword, setEnteredConfPassword] = useState("");

  const nicChangeHandler = (event) => {
    setEnteredNic(event.target.value);
  }

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const mobileNoChangeHandler = (event) => {
    setEnteredMobileNo(event.target.value);
  }

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  }

  const confPasswordChangeHandler = (event) => {
    setEnteredConfPassword(event.target.value);
    if(enteredPassword !== event.target.value){
      setPwdMatchText("Password doesnot match!!!")
      setPwdMsgColor("text-danger");
      
    }else{
      setPwdMatchText("Password Matched!!!")
      setPwdMsgColor("text-success");
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      nic: enteredNic,
      name: enteredName,
      email: enteredEmail,
      mobileNo: enteredMobileNo,
      password: enteredPassword
    };

    //Send form data to the seller service
    SellerService.getData(formData);

    setEnteredNic("");
    setEnteredName("");
    setEnteredEmail("");
    setEnteredMobileNo("");
    setEnteredPassword("");
    setEnteredConfPassword("");

    history.push("/login");


  }

  const clearData = () => {
    setEnteredNic("");
    setEnteredName("");
    setEnteredEmail("");
    setEnteredMobileNo("");
    setEnteredPassword("");
    setEnteredConfPassword("");
    
  }

  return (
    <section className="register-photo">
      <div className="form-container">
        <div className="image-holder"></div>
        <form onSubmit={submitHandler} method="post">
          <h2 className="text-center">
            <strong>Create</strong> an account.
          </h2>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="NIC"
              value={enteredNic}
              placeholder="NIC"
              onChange={nicChangeHandler}
            />
          </div>
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
                <input className="form-check-input" type="checkbox" />I agree to
                the license terms.
              </label>
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Sign Up
            </button>
            <button onClick={clearData} className="btn btn-success btn-block" type="button">
              Clear
            </button>
          </div>
          <Link className="already" to="/login">
            You already have an account? Login here.
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Register;
