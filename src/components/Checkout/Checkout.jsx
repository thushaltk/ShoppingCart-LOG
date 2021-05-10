import { useState } from "react";
import SMSService from "../../services/SMSService";
import "./Checkout.css";
import CreditCard from "./CreditCard";

const Checkout = (props) => {
  const [numberInput, setNumberInput] = useState({
    to: "",
    message: "",
  });
  const [btn1Classes, setBtn1Classes] = useState("btn btn-primary");
  const [btn2Classes, setBtn2Classes] = useState("btn btn-primary");
  const [btn3Classes, setBtn3Classes] = useState("btn btn-primary");

  const [btn1Text, setBtn1Text] = useState("SELECT");
  const [btn2Text, setBtn2Text] = useState("SELECT");
  const [btn3Text, setBtn3Text] = useState("SELECT");

  const btn1ClassHandler = () => {
    setBtn1Classes("btn btn-success");
    setBtn1Text("SELECTED");
    setBtn2Classes("btn btn-primary");
    setBtn2Text("SELECT");
    setBtn3Classes("btn btn-primary");
    setBtn3Text("SELECT");
  }

  const btn2ClassHandler = () => {
    setBtn2Classes("btn btn-success");
    setBtn2Text("SELECTED");
    setBtn1Classes("btn btn-primary");
    setBtn1Text("SELECT");
    setBtn3Classes("btn btn-primary");
    setBtn3Text("SELECT");
  }

  const btn3ClassHandler = () => {
    setBtn3Classes("btn btn-success");
    setBtn3Text("SELECTED");
    setBtn1Classes("btn btn-primary");
    setBtn1Text("SELECT");
    setBtn2Classes("btn btn-primary");
    setBtn2Text("SELECT");
  }

  const showNumberChangeHandler = (event) => {
    setNumberInput({
      to: event.target.value,
      message:
        "Rs. " +
        props.subTot +
        ".00 has been deducted from your phone balance. Thank You!!!",
    });
    console.log(numberInput);
  };

  const sendNumber = () => {
    SMSService.sendsms(numberInput);
    console.log(numberInput);
  };

  return (
    <div>
      <div className="container">
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
            Choose a Delivery Method
          </h2>
          <div
            className="bg-white rounded-lg shadow-sm p-5"
            style={{ marginBottom: "10px"}}
          >
            <ul
              role="tablist"
              className="nav bg-light nav-pills rounded-pill nav-fill mb-3"
            >
              <li className="nav-item">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 bg-light">
                        <div className="p-2 px-3 text-uppercase">Delivery Method</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Price</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Estimated</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">SELECT</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="border-0">
                        <div className="p-2">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_Parcel_Service_logo_2014.svg/1200px-United_Parcel_Service_logo_2014.svg.png"
                            alt=""
                            width={70}
                            className="img-fluid rounded shadow-sm"
                          />

                          <div className="ml-3 d-inline-block align-middle">
                            <h6 className="mb-0">
                              {" "}
                              <a
                                href="#"
                                className="text-dark d-inline-block align-middle"
                              >
                                UPS - 1 Day Delivery
                              </a>
                            </h6>
                          </div>
                        </div>
                      </th>
                      <td className="border-0 align-middle">
                        <strong> +Rs.400.00</strong>
                      </td>
                      <td className="border-0 align-middle">
                        <strong> 30-50 days</strong>
                      </td>
                      <td className="border-0 align-middle">
                        <a className="text-dark">
                          <button onClick={btn1ClassHandler} className={btn1Classes}>{btn1Text}</button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="border-0">
                        <div className="p-2">
                          <img
                            src="https://i.pinimg.com/originals/0f/48/0f/0f480fbefa1491c8307a91d9a383f02e.jpg"
                            alt=""
                            width={70}
                            className="img-fluid rounded shadow-sm"
                          />

                          <div className="ml-3 d-inline-block align-middle">
                            <h6 className="mb-0">
                              {" "}
                              <a
                                href="#"
                                className="text-dark d-inline-block align-middle"
                              >
                                FedEx Next Day Delivery
                              </a>
                            </h6>
                          </div>
                        </div>
                      </th>
                      <td className="border-0 align-middle">
                        <strong> +Rs.880.00</strong>
                      </td>
                      <td className="border-0 align-middle">
                        <strong> 10-20 days</strong>
                      </td>
                      <td className="border-0 align-middle">
                        <a className="text-dark">
                          <button onClick={btn2ClassHandler} className={btn2Classes}>{btn2Text}</button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="border-0">
                        <div className="p-2">
                          <img
                            src="https://lh3.googleusercontent.com/proxy/iX-zD5lSwd8loLPEulu0WMg12xCzAGlUFjc5yTgSKoi-4rYpZRFvNHd1JvAxwhVZBRofzbXxvb6iZhIZ4niabPOjePRWlqKHIQBwSqm-EldOa8yG-rdh7D2SvcLEFS8fbIPhwrUfxFAsKA4BM6I"
                            alt=""
                            width={70}
                            className="img-fluid rounded shadow-sm"
                          />

                          <div className="ml-3 d-inline-block align-middle">
                            <h6 className="mb-0">
                              {" "}
                              <a
                                className="text-dark d-inline-block align-middle"
                              >
                                DHL Express
                              </a>
                            </h6>
                          </div>
                        </div>
                      </th>
                      <td className="border-0 align-middle">
                        <strong> +Rs.1500.00</strong>
                      </td>
                      <td className="border-0 align-middle">
                        <strong> 5-8 days</strong>
                      </td>
                      <td className="border-0 align-middle">
                        <a className="text-dark">
                          <button onClick={btn3ClassHandler} className={btn3Classes}>{btn3Text}</button>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
          {/* End */}
        </div>
      </div>
      <div className="container" style={{ height: "100vh" }}>
        <div
          className="col-lg-7 mx-auto"
          style={{
            marginTop: "70px",
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
    </div>
  );
};

export default Checkout;
