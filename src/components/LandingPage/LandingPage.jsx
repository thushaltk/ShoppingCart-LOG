import Items from "../Items/Items";
import "./LandingPage.css";

const LandingPage = (props) => {
  const cartDetailsHandler = (data) => {
    //console.log(data);
    props.sendCartDetails(data);
  }

  return (
    <div>
      <div className="jumbotron">
        <br/><br/><br/><br/>
        <p></p>
      </div>
      <Items key="1" sendCartDetails={cartDetailsHandler}/>
    </div>
  );
};

export default LandingPage;
