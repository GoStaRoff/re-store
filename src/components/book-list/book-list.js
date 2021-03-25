import React, { useEffect } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { booksLoaded, booksRequested, booksError } from "../../actions";
import Spinner from "../spinner";
import "./book-list.css";

const BookList = ({ books, fetchBooks, loading, error }) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  if (loading)
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );

  if (error) {
    return new Error();
  }

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

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      bookstoreService
        .getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
    },
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
