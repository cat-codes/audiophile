import React from "react";
import "./Button1.scss";

const Button1 = ({ purpose }) => {
  return (
    <button type="button" className="button button1 btn-qty white">
      {purpose}
    </button>
  );
};

export default Button1;
