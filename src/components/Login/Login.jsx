import { useEffect, useRef, useState } from "react";
import "./Login.css";

import SellerService from "../../services/SellerService";
import { useHistory } from "react-router";
import Notification from "../Notification/Notification";
import LoginService from "../../services/LoginService";
import { Link } from "react-router-dom";
import BuyerService from "../../services/BuyerService";

const Login = (props) => {
  const [allData, setAllData] = useState([]);
  const [buyerData, setBuyerData] = useState([]);
  const [enteredNic, setEnteredNic] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [notifyData, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const buyerEmail = useRef();
  const buyerPassword = useRef();

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
    window.onload = function () {
      if (!window.location.hash) {
        window.location = window.location + "#loaded";
        window.location.reload();
      }
    };

    SellerService.getAllSellerData().then((res) => {
      setAllData(res.data);
    });

    BuyerService.getAllBuyerData().then((res) => {
      setBuyerData(res.data);
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
    } else {
      setNotify({
        isOpen: true,
        message: "LOGGIN FAILED!!",
        type: "error",
      });

      //console.log(notifyData);
    }
  };

  const buyerloginHandler = () => {
    const filteredBuyerData = buyerData.filter((buyer) => {
      return buyer.email === buyerEmail.current.value && buyer.password === buyerPassword.current.value;
    });

    for (const ele of filteredBuyerData) {
      var buyerName = ele.name;
      var buyerID = ele.id;
      localStorage.setItem("bName", buyerName);
      localStorage.setItem("bID", buyerID);
    }

    if (filteredBuyerData.length !== 0) {
      setNotify({
        isOpen: true,
        message: "LOGGIN SUCCESSFUL",
        type: "success",
      });

      setTimeout(() => {
        const loginBuyerformData = {
          name: buyerName,
          password: buyerPassword,
        };

        //props.passBuyerData(loginformData);
        history.push("/");
      }, 1000);
    } else {
      setNotify({
        isOpen: true,
        message: "LOGGIN FAILED!!",
        type: "error",
      });
    }
  };

  return (
    <section className="login-clean row">
      <form method="post">
        <h2>Buyer Login</h2>
        <div className="illustration">
          <img className="bimg" />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="buyerEmail"
            ref={buyerEmail}
            placeholder="Enter Email"
          />
          <input
            className="form-control"
            type="password"
            name="buyerPassword"
            ref={buyerPassword}
            placeholder="Enter Password"
          />
          <button
            onClick={buyerloginHandler}
            className="btn btn-primary btn-block"
            type="button"
            style={{ marginBottom: "10px" }}
          >
            Log In with Email
          </button>
          <Link className="forgot" to="/buyerSignup">
            No account. Click here to Register.
          </Link>
        </div>
      </form>

      <form onSubmit={loginFormSubmitHandler} method="post">
        <h2>Seller Login</h2>
        <div className="illustration">
          <img className="img" />
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
        <Link className="forgot" to="/signup">
        No account. Click here to Register.
        </Link>
      </form>
      <Notification notify={notifyData} />
    </section>
  );
};

export default Login;
