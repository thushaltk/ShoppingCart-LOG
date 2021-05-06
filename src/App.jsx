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

function App() {
  const [loginData, setLoginData] = useState("");

  const passSellerData = (data) => {
    setLoginData(data);
  }

  return (
    <div>
      <header>
        <div>
          <Router>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/">
                  <LandingPage />
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
