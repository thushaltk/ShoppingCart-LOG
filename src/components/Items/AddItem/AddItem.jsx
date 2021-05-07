import {useState} from 'react';
import { useHistory } from 'react-router';

import "./AddItem.css";

import ItemsService from '../../../services/ItemsService';

const AddItem = (props) => {
    const [enteredItemName, setEnteredItemName] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
    const [enteredImgUrl, setEnteredImgUrl] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    let history = useHistory();

    const itemNameChangeHandler = (event) => {
        setEnteredItemName(event.target.value);
    }

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    }

    const imgUrlChangeHandler = (event) => {
        setEnteredImgUrl(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    }


  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
        itemName: enteredItemName,
        description: enteredDescription,
        imageUrl: enteredImgUrl,
        price: enteredPrice,
        sellerName: localStorage.getItem("sName"),
        sellerNic: localStorage.getItem("sNic")
    }
    ItemsService.addItems(formData);
    history.push("/sellerPage");
  };

  return (
    <div className="container">
      <section className="contact-clean">
        <form onSubmit={submitHandler} method="post">
          <h2 className="text-center">ADD ITEM</h2>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="itemName"
              onChange={itemNameChangeHandler}
              placeholder="Item Name"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              type="text"
              name="description"
              onChange={descriptionChangeHandler}
              placeholder="Item Description"
              rows="14"
            ></textarea>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="imageUrl"
              onChange={imgUrlChangeHandler}
              placeholder="Image URL"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              name="price"
              onChange={priceChangeHandler}
              placeholder="Price"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddItem;
