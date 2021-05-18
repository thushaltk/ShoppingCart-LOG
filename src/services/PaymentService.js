import axios from "axios";
import EmailService from "./EmailService";

const PAYMENT_API_BASE_URL = "http://localhost:8080/api/payment/charge";

class PaymentService {
  constructor() {
    this.notifyEmail = {
        isOpen: false,
        message: "",
        type: "",
      };
  }

  async handleToken(totalAmount, token) {
    try {
          await axios
              .post(PAYMENT_API_BASE_URL, "", {
                  headers: {
                      token: token.id,
                      amount: totalAmount,
                  },
              });
          EmailService.sendmail(token.email, "Your Payment is successfully confirmed!!!");
          this.notifyEmail = {
              isOpen: true,
              message: "Payment Confirmed!!! Email Sent Successfully!!!",
              type: "success",
          };
      } catch (error) {
          this.notifyEmail = {
              isOpen: true,
              message: "Payment Unsuccessfull! " + error,
              type: "error",
          };
      }
  }

  notifyUser(){
      return this.notifyEmail;
  }

  
}

export default new PaymentService();
