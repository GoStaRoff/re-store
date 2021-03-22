import React, { Fragment } from "react";
import './book-list-item.css'

const BookListItem = ({ book }) => {
  const { tittle, author } = book;
  return (
    <Fragment>
      <span>{tittle}</span>
      <span>{author}</span>
    </Fragment>
  );
};

export default BookListItem;
