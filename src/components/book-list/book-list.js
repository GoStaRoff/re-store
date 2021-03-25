import React from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { fetchBooks, bookAddedToCart } from "../../actions";
import Spinner from "../spinner";
import "./book-list.css";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map((book, index) => {
        return (
          <li key={index} className="book">
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    const { loading, error, books, onAddedToCart } = this.props;

    if (loading)
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );

    if (error) {
      return new Error();
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (bookId) => dispatch(bookAddedToCart(bookId)),
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);
