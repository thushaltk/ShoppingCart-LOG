import { useEffect, useState } from "react";
import "./Login.css";

import SellerService from "../../services/SellerService";
import { useHistory } from "react-router";
import Notification from "../Notification/Notification";


const Login = (props) => {
  const [allData, setAllData] = useState([]);
  const [enteredNic, setEnteredNic] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [notifyData, setNotify] = useState({
    isOpen: false,
    message: "",
    type: ""
  });

  let history = useHistory();

  const loginNicChangeHandler = (event) => {
    setEnteredNic(event.target.value);
  };

  const loginPwdChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const loginFormSubmitHandler = (event) => {
    event.preventDefault();
    getAlldata();
  };

  useEffect(() => {
    localStorage.removeItem("sName");
    window.onload = function() {
      if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
      }
    }
    
    SellerService.getAllSellerData().then((res) => {
      setAllData(res.data);
    });
  }, []);

  const getAlldata = () => {
    checkLogin();
  };

  const checkLogin = () => {
    const filteredData = allData.filter((seller) => {
      return seller.nic === enteredNic && seller.password === enteredPassword;
    });

    for (const ele of filteredData) {
      var sellerName = ele.name;
      var sellerNic = ele.nic;
      localStorage.setItem("sName", sellerName);
      localStorage.setItem("sNic", sellerNic);
    }

    if (filteredData.length !== 0) {
      setNotify({
        isOpen: true,
        message: "LOGGIN SUCCESSFUL",
        type: "success",
      });

      setTimeout(() => {
        const loginformData = {
          nic: enteredNic,
          name: sellerName,
          password: enteredPassword,
        };

        props.passData(loginformData);
        history.push("/sellerPage");
      }, 1000);
    }else{

      setNotify({
        isOpen: true,
        message: "LOGGIN FAILED!!",
        type: "error",
      });

      console.log(notifyData);
    }
  };

  

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
      <Notification notify={notifyData} />
    </section>
  );
};

export default Login;
