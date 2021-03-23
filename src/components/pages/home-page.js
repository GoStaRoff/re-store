import React, { useState } from "react";
import BookList from "../book-list";

const HomePage = (props) => {
  const [error, setError] = useState(false);

  const throwError = () => {
    setError(true);
  };
  if (error) {props.foo.bar = 0};
  return (
    <div className="page">
      Home Page
      <BookList />
      <button className="btn btn-primary" onClick={throwError}>
        error
      </button>
    </div>
  );
};

export default HomePage;
