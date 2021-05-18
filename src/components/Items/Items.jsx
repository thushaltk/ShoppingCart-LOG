import { useEffect, useState } from "react";
import ItemsService from "../../services/ItemsService";
import Item from "./Item";
import "./Items.css";


const Items = (props) => {
  const [items, setItems] = useState([]);
  var slicedArr = Array.from(Array(items.length), () => new Array(3));


  /**
   * Below useEffect function runs once the component is loaded.
   * It retrieves all items from ItemsService and set it to "items" state. 
   */
  useEffect(() => {
    ItemsService.getAllItemsData().then((res) => {
      setItems(res.data);
    });
  }, []);


  /**
   * This function slices the items array into 3 parts and
   * add it to a 2D array called slicedArr.
   * This will display maximum 3 items each row in the home page.
   */
  const sliceArrayHandler = () => {
    var z = 0;
    for (var i = 0; i < items.length; ) {
      for (var j = 0; j < 3; j++) {
        slicedArr[i][j] = items[z];
        z++;
      }
      i++;
    }
  };
  sliceArrayHandler();

  /**
   * Passes cart details to the parent component
   * @param {*} data - cart details
   */
  const cartDataHandler = (data) => {
    console.log(data);
    props.sendCartDetails(data);

  }

  return (
    <div className="card-group">
      {slicedArr.map((item) => {
        return <div className="card-group">
          {item.map((subItem) => {
            if(subItem !== undefined){
              return <Item key={subItem.id} itemData={subItem} sendCartData={cartDataHandler}/>;
            }
          })}
        </div>
      })}
    </div>
  );
};

export default Items;
