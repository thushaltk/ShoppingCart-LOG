import { useState } from "react";
import SMSService from "../../services/SMSService";
import "./Checkout.css";
import CreditCard from "./CreditCard";

const Checkout = (props) => {
  const [numberInput, setNumberInput] = useState({
    to: "",
    message: ""
  });
  //console.log(props.subTot);

  const showNumberChangeHandler = (event) => {
    setNumberInput({
      to: event.target.value,
      message: "Rs. " + props.subTot + ".00 has been deducted from your phone balance. Thank You!!!"
    });
    console.log(numberInput);
  };

  const sendNumber = () => {
    SMSService.sendsms(numberInput);
    console.log(numberInput);
  }

  return (
    <div className="container" style={{ height: "100vh" }}>
      <div
        className="col-lg-7 mx-auto"
        style={{
          marginTop: "100px",
          border: "1px solid #90CAF9",
          boxShadow: "5px 10px #90CAF9",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ paddingTop: "30px", textAlign: "center" }}>
          Choose a Payment Method
        </h2>
        <div
          className="bg-white rounded-lg shadow-sm p-5"
          style={{ marginBottom: "30px" }}
        >
          <ul
            role="tablist"
            className="nav bg-light nav-pills rounded-pill nav-fill mb-3"
          >
            <li className="nav-item">
              <button
                className="btn btn-primary"
                style={{ fontSize: "20px", marginBottom: "10px" }}
              >
                <i className="fa fa-credit-card" />
                <CreditCard totalAmount={props.subTot} />
              </button>
            </li>
            <li className="nav-item">
              <p>
                <strong>OR</strong>
              </p>
            </li>

            <li className="nav-item">
              <input
                className="form-control"
                type="text"
                name="phone"
                onChange={showNumberChangeHandler}
                placeholder="Enter Mobile No."
              />
              <button
                className="btn btn-primary"
                onClick={sendNumber}
                style={{ marginTop: "30px", fontSize: "20px" }}
              >
                <i className="fa fa-credit-card" />
                Use Mobile Number
              </button>
            </li>
          </ul>
        </div>
        {/* End */}
      </div>
    </div>
  );
};

export default Checkout;
