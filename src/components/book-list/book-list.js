import React, { useEffect } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { booksLoaded } from "../../actions";
import './book-list.css'

const BookList = ({ books, booksLoaded, bookstoreService }) => {
  useEffect(() => {
    const data = bookstoreService.getBooks();
    booksLoaded(data);
  }, [booksLoaded, bookstoreService]);

  return (
    <ul className="book-list">
      {books.map((book, index) => {
        return (
          <li key={index} className="book">
            <BookListItem book={book} />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ books }) => {
  return {
    books,
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, { booksLoaded })(BookList)
);
