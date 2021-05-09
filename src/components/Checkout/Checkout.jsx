import { useState } from "react";
import "./Checkout.css";
import CreditCard from "./CreditCard";

const Checkout = (props) => {
  //console.log(props.subTot);
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
              <button className="btn btn-primary" style={{ fontSize: "20px" }}>
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
