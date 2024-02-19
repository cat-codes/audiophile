import React from "react";
import "./Button2.scss";

const Button2 = ({ purpose, id }) => {
  return (
    <button type="button" className="button button2 btn-qty black" id={id}>
      {purpose}
    </button>
  );
};

export default Button2;
