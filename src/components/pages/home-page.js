import React from "react";
import BookList from "../book-list";
import ShoppingCartTable from "../shopping-cart-table";
import "./home-page.css";

const HomePage = () => {
  return (
    <div>
      <div className="page">
        <BookList />
      </div>
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
