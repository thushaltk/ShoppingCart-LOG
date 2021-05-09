import axios from "axios";

const EMAIL_API_BASE_URL = "http://localhost:8080/sendemail";

class EmailService {
  constructor(data) {
    this.data = data;
  }

  sendmail(email, message){
    return axios.get(EMAIL_API_BASE_URL + '?' + 'email=' + email + '&' + 'message=' + message);
  }

}

export default new EmailService();
