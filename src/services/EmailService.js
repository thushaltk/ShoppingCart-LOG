import axios from "axios";

const ITEMS_API_BASE_URL = "http://localhost:8080/sendemail";

class EmailService {
  constructor(data) {
    this.data = data;
  }

  sendmail(email, message){
    return axios.get(ITEMS_API_BASE_URL + '?' + 'email=' + email + '&' + 'message=' + message);
  }

}

export default new EmailService();
