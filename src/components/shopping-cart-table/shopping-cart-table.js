import React from "react";
import "./shopping-cart-table.css";

const ShoppingCartTable = () => {
  return (
    <div className="down-page">
      <p className="title">Your order</p>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Naruto S2</td>
            <td>2</td>
            <td>70</td>
            <td>
              <button className="btn btn-outline-danger btn-sm">
                <i className="fa fa-trash-o" />
              </button>
              <button className="btn btn-outline-success btn-sm">
                <i className="fa fa-plus-circle" />
              </button>
              <button className="btn btn-outline-warning btn-sm">
                <i className="fa fa-minus-circle" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ShoppingCartTable;
