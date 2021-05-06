import axios from "axios";

const ITEMS_API_BASE_URL = "http://localhost:8080/api/v1/items";

class ItemService{
    constructor(data) {
        this.data = data;
      }

      //Add items
      addItems(itemData) {
        return axios.post(ITEMS_API_BASE_URL, itemData);
      }
}

export default new ItemService();