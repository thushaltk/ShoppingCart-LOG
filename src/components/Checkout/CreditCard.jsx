import React, { useState } from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";

import Notification from "../Notification/Notification";
import EmailService from "../../services/EmailService";


const CreditCard = (props) => {
  const [notifyEmail, setNotifyEmail] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  async function handleToken(token) {
    console.log(token);
    await axios
      .post("http://localhost:8080/api/payment/charge", "", {
        headers: {
          token: token.id,
          amount: props.totalAmount,
        },
      })
      .then(() => {
        EmailService.sendmail(token.email, "Your Payment is successfully confirmed!!!");
        setNotifyEmail(() => ({
          isOpen: true,
          message: "Payment Confirmed!!! Email Sent Successfully!!!",
          type: "success",
        }));
      })
      .catch((error) => {
        setNotifyEmail(() => ({
          isOpen: true,
          message: "Payment Unsuccessfull! " + error,
          type: "error",
        }));
      });
  }

  return (
    <div className="App">
      <Stripe
        stripeKey="pk_test_51IpE6NGvyYYsIP6DEdQgoDUkoQhwpEtPp57gcmKzZGCgsaSXVxouKPCtjsEkYceRpA1edka3h8bac1Uac2rlP5XG00fYj6YmCB"
        token={handleToken}
      />
      <Notification notify={notifyEmail} />
     
    </div>
  );
};

export default CreditCard;
