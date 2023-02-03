import React from "react";
import "./style.scss";

const ErrorComponent = () => {
  return (
    <div className="error-component--wrapper">
      <div className="error-component__content">
        Something Went Wrong
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    </div>
  );
};

export default ErrorComponent;
