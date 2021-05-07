import { useEffect, useState } from "react";

import "./Items.css";

import ItemsService from "../../services/ItemsService";
import Item from "./Item";
import NotFound from "../404NotFound/NotFound";

const Items = () => {
  const [items, setItems] = useState([]);
  var slicedArr = Array.from(Array(items.length), () => new Array(3));

  useEffect(() => {
    ItemsService.getAllItemsData().then((res) => {
      setItems(res.data);
    });
  }, []);

  const sliceArrayHandler = () => {
    var z = 0;
    for (var i = 0; i < items.length; ) {
      for (var j = 0; j < 4; j++) {
        slicedArr[i][j] = items[z];
        z++;
      }
      i++;
    }
    console.log(slicedArr);
  };
  sliceArrayHandler();
  //console.log(items)

  return (
    <div className="card-group">
      {slicedArr.map((item) => {
        return <div className="card-group">
          {item.map((subItem) => {
            if(subItem !== undefined){
              return <Item key={subItem.id} itemData={subItem} />;
            }
            
          })}
        </div>
      })}
    </div>
  );
};

export default Items;
