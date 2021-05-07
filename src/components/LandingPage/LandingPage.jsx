import { useEffect, useState } from "react";
import ItemsService from "../../services/ItemsService";
import NotFound from "../404NotFound/NotFound";
import Items from "../Items/Items";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="text-center">Shop Anything...</h1>
        <p></p>
      </div>
      <Items/>
    </div>
  );
};

export default LandingPage;
