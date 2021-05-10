import axios from "axios";

const LOGIN_API_BASE_URL = "http://localhost:8080/googleLogin";

class LoginService {
  constructor(data) {
    this.data = data;
  }

  googleLogin(){
    return axios.get(LOGIN_API_BASE_URL);
  }

}

export default new LoginService();
