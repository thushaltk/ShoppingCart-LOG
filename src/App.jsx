import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";

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
