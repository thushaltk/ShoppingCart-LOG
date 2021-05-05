import Items from "../Items/Items";
import "./LandingPage.css";

const LandingPage = () => {
  

  return (
    <div>
      <div className="jumbotron">
        <h1 className="text-center">Shop Anything...</h1>
        <p></p>
      </div>
      <div className="card-group">
        <Items/>
        <Items/>
        <Items/>
      </div>
    </div>
  );
};

export default LandingPage;
