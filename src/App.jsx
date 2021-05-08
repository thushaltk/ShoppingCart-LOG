import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import SellerPage from "./components/SellerPage/SellerPage";
import { useState } from "react";
import AddItem from "./components/Items/AddItem/AddItem";
import UpdateItem from "./components/Items/AddItem/UpdateItem";
import ContactUs from "./components/ContactUs/ContactUs";
import Cart from "./components/Cart/Cart";


function App() {
  const [loginData, setLoginData] = useState("");
  const [cartData, setCartData] = useState([]);
  const [logOut, setLogout] = useState(false);

  const passSellerData = (data) => {
    setLoginData(data);
    logout();
  }

  const logout = () => {
    setLogout(true);
  }

  const cartDetailsHandler = (data) => {
    setCartData(() => {
      return [data];
    });
    //console.log(cartData);
  }


  return (
    <div>
      <header>
        <div>
          <Router>
            <Header cart={cartData} logStatus={logOut}/>
            <div className="container">
              <Switch>
                <Route exact path="/">
                  <LandingPage sendCartDetails={cartDetailsHandler}/>
                </Route>
                <Route path="/signup">
                  <Register />
                </Route>
                <Route path="/login">
                  <Login passData={passSellerData}/>
                </Route>
                <Route path="/sellerPage">
                  <SellerPage logindata={loginData}/>
                </Route>
                <Route path="/addItems">
                  <AddItem sellerData={loginData}/>
                </Route>
                <Route path="/contactUs">
                  <ContactUs/>
                </Route>
                <Route path="/updateItem/:id">
                  <UpdateItem/>
                </Route>
                <Route path="/cart">
                  <Cart cart={cartData}/>
                </Route>
              </Switch>
            </div>

            <Footer />
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
