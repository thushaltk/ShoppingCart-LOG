import { useState } from "react";
import { Link } from "react-router-dom";

import Items from "../Items/Items";
import "./SellerPage.css";

import ItemsService from "../../services/ItemsService";

const SellerPage = (props) => {
  const [allItems, setAllItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const setDataHandler = (event) => {
    setTimeout(function () {
      setSelectedItems(event);
    }, 1000);
  };

  const loadData = () => {
    ItemsService.getAllItemsData().then((res) => {
      setAllItems(res.data);
    });

    const filteredItemsData = allItems.filter((item) => {
      return item.sellerName === localStorage.getItem('sName');
    });

    setDataHandler(filteredItemsData);
  };

  return (
    <div className="container">
      <h1>Welcome {localStorage.getItem('sName')} !</h1>
      <div className="btn-group" role="group">
        <Link
          to="/addItems"
          className="btnMargin btn btn-outline-success bounce animated"
          type="button"
        >
          ADD ITEM
        </Link>
        <button
          onClick={loadData}
          className="btnMargin btn btn-outline-primary bounce animated"
          type="button"
        >
          LOAD DATA
        </button>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Seller Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item) => (
              <tr key={item.itemID}>
                <td>{item.itemID}</td>
                <td>{item.itemName}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.sellerName}</td>
                <td>
                  <button className="btn btn-warning">Update</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerPage;
