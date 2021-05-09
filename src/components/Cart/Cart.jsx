import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Cart = (props) => {
  const [cartItems, setCartItems] = useState(props.cart);
  let history = useHistory();
  var tot = 0;

  useEffect(() => {
    props.cart.map((item) => {
      setCartItems(item);
    });
  }, []);

  const proceed = () => {
    props.subTotal(tot);
    history.push("/checkout");
  };

  const removeItem = (itemName) => {
    //console.log(itemName);
    setCartItems(cartItems.filter((item) => item.itemName !== itemName));
  };

  return (
    <div className="shopping-cart">
      <div className="px-4 px-lg-0">
        <div className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border-0 bg-light">
                          <div className="p-2 px-3 text-uppercase">Product</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Price</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Remove</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => {
                        tot = tot + item.price;
                        return (
                          <tr>
                            <th scope="row" className="border-0">
                              <div className="p-2">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  width={70}
                                  className="img-fluid rounded shadow-sm"
                                />

                                <div className="ml-3 d-inline-block align-middle">
                                  <h5 className="mb-0">
                                    {" "}
                                    <a
                                      href="#"
                                      className="text-dark d-inline-block align-middle"
                                    >
                                      {item.itemName}
                                    </a>
                                  </h5>
                                  <span className="text-muted font-weight-normal font-italic d-block">
                                    Category: Phones
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td className="border-0 align-middle">
                              <strong> Rs. {item.price}.00</strong>
                            </td>
                            <td className="border-0 align-middle">
                              <a href="#" className="text-dark">
                                <button
                                  onClick={() => removeItem(item.itemName)}
                                  className="btn btn-danger"
                                >
                                  REMOVE
                                </button>
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row py-5 p-4 bg-white rounded shadow-sm">
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Order summary{" "}
                </div>
                <div className="p-4">
                  <p className="font-italic mb-4">
                    Shipping and additional costs are calculated based on values
                    you have entered.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Order Subtotal </strong>
                      <strong>Rs. {tot}.00</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">
                        Shipping and handling
                      </strong>
                      <strong>Rs. 150.00</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Tax</strong>
                      <strong>Rs. 0.00</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Total</strong>
                      <h5 className="font-weight-bold">
                        Rs. {(tot = tot + 10)}.00
                      </h5>
                    </li>
                  </ul>
                  <button
                    onClick={proceed}
                    className="btn btn-primary rounded-pill py-2 btn-block"
                  >
                    Procceed to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
