import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Items from "../Items/Items";
import "./SellerPage.css";

import ItemsService from "../../services/ItemsService";
import NotFound from "../404NotFound/NotFound";

var bol = true;

const SellerPage = (props) => {
  const [allItems, setAllItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  let history = useHistory();

  const setDataHandler = (event) => {
    setSelectedItems(event);
  };

  useEffect(() => {
    ItemsService.getAllItemsData().then((res) => {
      setAllItems(res.data);
    });
  }, []);

  const loadData = () => {
    bol = false;
    const filteredItemsData = allItems.filter((item) => {
      return item.sellerName === localStorage.getItem("sName");
    });

    setDataHandler(filteredItemsData);
  };

  const editItem = (id) => {
    // let id = localStorage.getItem("itemID");
    //localStorage.removeItem("itemID");
    history.push(`/updateItem/${id}`);
  };

  const deleteItem = (id) => {
    ItemsService.deleteItem(id).then((res) => {
      setSelectedItems(selectedItems.filter((item) => item.itemID !== id));
    });
  };

  return (
    <div className="container">
      <h1>Welcome {localStorage.getItem("sName")} !</h1>
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
      {bol === true ? (
        <NotFound />
      ) : (
        <div className="table-responsive">
          <table className="table">
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
                    <button
                      onClick={() => editItem(item.itemID)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteItem(item.itemID)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SellerPage;
