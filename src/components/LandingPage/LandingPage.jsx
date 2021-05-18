import Items from "../Items/Items"; //Imports Items component
import "./LandingPage.css";

const LandingPage = (props) => {
  /**
   * Pass cart details to the parent (App) component
   * @param {object} data - cart details 
   */
  const cartDetailsHandler = (data) => {
    props.sendCartDetails(data);
  }

  return (
    <div>
      <div className="jumbotron jumbotron_mod">
        <br/><br/><br/><br/>
        <p></p>
      </div>
      <Items key="1" sendCartDetails={cartDetailsHandler}/>
    </div>
  );
};

export default LandingPage;
