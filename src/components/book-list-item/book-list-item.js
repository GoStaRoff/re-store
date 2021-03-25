import React, { Fragment } from "react";
import "./book-list-item.css";

const BookListItem = ({ book }) => {
  const { tittle, author, image, price } = book;
  return (
    <Fragment>
      <div>
        <img src={image} alt="bookImage" />
      </div>
      <div className="book-details">
        <p className="book-title">{tittle}</p>
        <p className="book-author">{author}</p>
        <p className="book-price">{price}$</p>
        <button class="btn btn-restore">Add to cart</button>
      </div>
    </Fragment>
  );
};

export default BookListItem;
