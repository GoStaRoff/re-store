import React from "react";
import image from "./indicator.gif";
import "./error-indicator.css";
import Spinner from "../spinner";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img className="image" alt="error" src={image} />
      <div className="text">
        <p className="title">Something going wrong..</p>
        <p className="text">
          Please wait, we should find and repair this problem ^-^
        </p>
        <p className="text">You may also refresh the page or try again later</p>
        <button className="btn btn-restore" onClick={() => window.location.reload()}>
          Refresh
        </button>
      </div>
      <Spinner />
    </div>
  );
};

export default ErrorIndicator;
