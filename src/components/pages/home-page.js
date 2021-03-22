import React from "react";
import BookList from "../book-list";

const HomePage = () => {
  const books = [
    { id: 1, tittle: "Naruto S1", author: "GOD" },
    { id: 2, tittle: "Naruto S2", author: "GOD" },
    { id: 3, tittle: "Naruto S3", author: "GOD" },
    { id: 4, tittle: "Naruto S4", author: "GOD" },
  ];
  return (
    <div>
      Home Page
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
