import React, { useEffect } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { booksLoaded } from "../../actions";

const BookList = ({ books, booksLoaded, bookstoreService }) => {
  useEffect(() => {
    const data = bookstoreService.getBooks();
    booksLoaded(data);
  }, [booksLoaded, bookstoreService]);

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

const mapStateToProps = ({ books }) => {
  return {
    books,
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, { booksLoaded })(BookList)
);
