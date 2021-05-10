import axios from "axios";

const BUYER_API_BASE_URL = "http://localhost:8080/api/v1/buyers";

class BuyerService {
  constructor(data) {
    this.data = data;
  }

  //Get all seller data 
  getAllBuyerData(){
    return axios.get(BUYER_API_BASE_URL);
  }

  //Add Sellers
  addBuyers(buyerData) {
    return axios.post(BUYER_API_BASE_URL, buyerData);
  }
}

export default new BuyerService();
