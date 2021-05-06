import axios from "axios";

const SELLER_API_BASE_URL = "http://localhost:8080/api/v1/sellers"


class SellerService {

  constructor(data) {
    this.data = data;
  }

  getData(data) {
    return axios.get(SELLER_API_BASE_URL);
  }

  checkLogin(data) {
      if(this.data.password === data.password){
        console.log("Loggin Success");
      }else{
        console.log("Loggin Failed");
      }
    
  }

  //Add Sellers
  addSellers(sellerData){
      return axios.post(SELLER_API_BASE_URL, sellerData)
  }
}

export default new SellerService();
