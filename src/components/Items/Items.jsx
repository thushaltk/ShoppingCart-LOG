import { useState } from "react";

import "./Items.css";

import phone from '../../assets/phone.jpg';

const Items = () => {
  const [items, setItems] = useState({
    id: "1223",
    name: "Smart Phone",
    description:
      "This is a SmartphoneThis is a SmartphoneThis is a SmartphoneThis is a Smartphone",
    imageUrl: phone,
    amount: 10,
    price: 20000.0,
  });

  return (
    <div className="card">
      <img className="card-img-top w-100 d-block" />
      <div className="card-body">
        <h4 className="card-title">{items.name}</h4>
        <img src={items.imageUrl}/>
        <p className="card-text">{items.description}</p>
        <button className="btn btn-primary" type="button">
          Add to Cart
        </button>
        <p className="card-text">{items.quantity}</p>
        <p className="card-text">{items.price}</p>
      </div>
    </div>
  );
};

export default Items;
