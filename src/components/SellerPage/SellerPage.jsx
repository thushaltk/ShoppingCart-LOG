import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import Items from "../Items/Items";
import "./SellerPage.css";

const SellerPage = (props) => {

  return (
    <div className="container">
      <h1>Welcome {props.logindata.name} !</h1>
      <div className="btn-group" role="group">
        <Link to="/addItems" className="btnMargin btn btn-outline-success bounce animated" type="button">
          ADD ITEM
        </Link>
      </div>
      <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Text</th>
                    <th>Text</th>
                    <th>Text</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                </tr>
                <tr>
                    <td>Cell 3</td>
                    <td>Cell 4</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
  );
};

export default SellerPage;
