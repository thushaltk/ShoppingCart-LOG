import React, { useState } from "react";
import Stripe from "react-stripe-checkout";

import Notification from "../Notification/Notification";
import PaymentService from "../../services/PaymentService";


const CreditCard = (props) => {
  const [notifyEmail, setNotifyEmail] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const handleTokenHandler = (token) => {
    PaymentService.handleToken(props.totalAmount, token);
    setNotifyEmail({
      isOpen: (PaymentService.notifyUser()).isOpen,
      message: (PaymentService.notifyUser()).message,
      type: (PaymentService.notifyUser()).type
    })
  }
  

  return (
    <div className="App">
      <Stripe
        stripeKey="pk_test_51IpE6NGvyYYsIP6DEdQgoDUkoQhwpEtPp57gcmKzZGCgsaSXVxouKPCtjsEkYceRpA1edka3h8bac1Uac2rlP5XG00fYj6YmCB"
        token={handleTokenHandler}
      />
      <Notification notify={notifyEmail} />
     
    </div>
  );
};

export default CreditCard;
