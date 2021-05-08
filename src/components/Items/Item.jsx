import { useState } from "react";
import "./Items.css";

var arrData = [];

const Item = (props) => {
  const cartItems = {
    itemName: "",
    imgUrl: "",
    sellerName: "",
    price: ""
  }
  
  const addToCart = () => {
    cartItems.itemName = props.itemData.itemName;
    cartItems.imgUrl = props.itemData.imageUrl;
    cartItems.sellerName = props.itemData.sellerName;
    cartItems.price = props.itemData.price;
    arrData.push(cartItems);
    props.sendCartData(arrData);
    
  };

  return (
    <div className="card">
      <img className="card-img-top w-100 d-block" />
      <div className="card-body">
        <h4 className="card-title">{props.itemData.itemName}</h4>
        <img className="pic" src={props.itemData.imageUrl} />
        <p className="card-text des">{props.itemData.description}</p>
        <button onClick={addToCart} className="btn btn-primary" type="button">
          Add to Cart
        </button>
        <p className="card-text para">Rs. {props.itemData.price}.00</p>
        <p className="card-text smallPara">
          Seller Name:- <strong>{props.itemData.sellerName}</strong>
        </p>
      </div>
    </div>
  );
};

export default Item;
