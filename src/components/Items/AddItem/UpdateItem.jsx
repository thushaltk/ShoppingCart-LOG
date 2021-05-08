import {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router';

import "./AddItem.css";

import ItemsService from '../../../services/ItemsService';

const UpdateItem = (props) => {
    let {id} = useParams();
    console.log(id);
    const [updatedID, setUpdatedID] = useState(id);
    const [updatedItemName, setUpdatedItemName] = useState("");
    const [updatedDescription, setUpdatedDescription] = useState("");
    const [updatedImgUrl, setUpdatedImgUrl] = useState("");
    const [updatedPrice, setUpdatedPrice] = useState("");
    let history = useHistory();

    const itemNameChangeHandler = (event) => {
        setUpdatedItemName(event.target.value);
    }

    const descriptionChangeHandler = (event) => {
        setUpdatedDescription(event.target.value);
    }

    const imgUrlChangeHandler = (event) => {
        setUpdatedImgUrl(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setUpdatedPrice(event.target.value);
    }

    useEffect(() => {
        ItemsService.getItemById(id).then((res) => {
            let oldItem = res.data;
            //console.log(res.data);
            setUpdatedItemName(oldItem.itemName);
            setUpdatedDescription(oldItem.description);
            setUpdatedImgUrl(oldItem.imageUrl);
            setUpdatedPrice(oldItem.price);
        })
    },[]);


  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
        id: updatedID,
        itemName: updatedItemName,
        description: updatedDescription,
        imageUrl: updatedImgUrl,
        price: updatedPrice,
        sellerName: localStorage.getItem("sName"),
        sellerNic: localStorage.getItem("sNic")
    }
    console.log(formData);
    ItemsService.updateItem(formData, updatedID).then(res => {
        history.push("/sellerPage");
    });
   
  };

  return (
    <div className="container">
      <section className="contact-clean">
        <form onSubmit={submitHandler} method="post">
          <h2 className="text-center">Update ITEM</h2>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="itemName"
              value={updatedItemName}
              onChange={itemNameChangeHandler}
              placeholder="Item Name"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              type="text"
              name="description"
              value={updatedDescription}
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
              value={updatedImgUrl}
              onChange={imgUrlChangeHandler}
              placeholder="Image URL"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              name="price"
              value={updatedPrice}
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

export default UpdateItem;
