import React from "react";
import BookListItem from "../book-list-item";

const BookList = (props) => {
  const books = props.books;
  return (
    <ul>
      {books.map((book, index) => {
        return (
          <li key={index}>
            <BookListItem book={book} />
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
