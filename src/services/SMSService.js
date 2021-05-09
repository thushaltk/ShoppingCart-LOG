import axios from "axios";

const SMS_API_BASE_URL = "http://localhost:8080/sms";

class SMSService {
  constructor(data) {
    this.data = data;
  }

  sendsms(sms){
    return axios.post(SMS_API_BASE_URL, sms);
  }

}

export default new SMSService();