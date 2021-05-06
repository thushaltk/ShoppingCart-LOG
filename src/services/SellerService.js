import axios from "axios";

const SELLER_API_BASE_URL = "http://localhost:8080/api/v1/sellers";

class SellerService {
  constructor(data) {
    this.data = data;
  }

  //Get all seller data 
  getAllSellerData(){
    return axios.get(SELLER_API_BASE_URL);
  }

  //Filter seller data by nic
  getSellersByNIC(formData) {
    const filteredData = this.data.filter(ele => {
      return ele.nic === formData.nic
    }) 
    console.log(filteredData);
  }

  // checkLogin(data) {
  //   if (this.data.password === data.password) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  //Add Sellers
  addSellers(sellerData) {
    return axios.post(SELLER_API_BASE_URL, sellerData);
  }
}

export default new SellerService();
