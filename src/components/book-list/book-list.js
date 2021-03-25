import React, { useEffect } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { booksLoaded } from "../../actions";
import Spinner from "../spinner";
import "./book-list.css";

const BookList = ({ books, booksLoaded, bookstoreService, loading }) => {
  useEffect(() => {
    bookstoreService.getBooks().then((data) => booksLoaded(data));
  }, [booksLoaded, bookstoreService]);

  if (loading)
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );

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

const mapStateToProps = ({ books, loading }) => {
  return {
    books,
    loading,
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, { booksLoaded })(BookList)
);
