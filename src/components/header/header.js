import React from "react";
import { useHistory } from "react-router";
import "./header.css";

const Header = () => {
  const history = useHistory();

  return (
    <div className="header">
      <div className="tittle" onClick={() => history.push("/")}>
        ReStore
      </div>
      <div className="cart" onClick={() => history.push("/cart")}>
        <p>5 items ($210)</p>
      </div>
    </div>
  );
};

export default Header;
