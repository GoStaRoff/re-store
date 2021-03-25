import React from "react";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { bookAddedToCart } from "../../actions";
import "./shopping-cart-table.css";

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, index) => {
    const { id, title, count, total } = item;
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => {
              onDelete(id);
            }}
            className="btn btn-outline-danger btn-sm"
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => {
              onIncrease(id);
            }}
            className="btn btn-outline-success btn-sm"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => {
              onDecrease(id);
            }}
            className="btn btn-outline-warning btn-sm"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="down-page">
      <p className="title">Your order</p>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Count</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <p className="total">Total ${total}</p>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (id) => {
      dispatch(bookAddedToCart(id));
    },
    onDecrease: (id) => {
      console.log("De " + id);
    },
    onDelete: (id) => {
      console.log("DE " + id);
    },
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)
);
