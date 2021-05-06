import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import SellerPage from "./components/SellerPage/SellerPage";

function App() {
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
                  <Login />
                </Route>
                <Route path="/sellerPage">
                  <SellerPage />
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
