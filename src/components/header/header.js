import React, {useState} from "react";
import { useHistory } from "react-router";
import "./header.css";

const Header = (props) => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const throwError = () => {
    setError(true);
  };

  if (error) {
    props.foo.bar = 0;
  }
  return (
    <div className="header">
      <div className="tittle" onClick={() => history.push("/")}>
        ReStore
        <button className="btn btn-primary" onClick={throwError}>
          error
        </button>
      </div>
      <div className="cart" onClick={() => history.push("/cart")}>
        <p>5 items ($210)</p>
      </div>
    </div>
  );
};

export default Header;
