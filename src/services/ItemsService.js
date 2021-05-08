import axios from "axios";

const ITEMS_API_BASE_URL = "http://localhost:8080/api/v1/items";

class ItemService {
  constructor(data) {
    this.data = data;
  }

  //Add items
  addItems(itemData) {
    return axios.post(ITEMS_API_BASE_URL, itemData);
  }

  //Get all items
  getAllItemsData() {
    return axios.get(ITEMS_API_BASE_URL);
  }

  getItemById(itemID){
    return axios.get(ITEMS_API_BASE_URL + '/' + itemID);
  }
  
  updateItem(item, itemID){
    return axios.put(ITEMS_API_BASE_URL + '/' + itemID, item);
  }

}

export default new ItemService();
