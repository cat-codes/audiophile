import React from "react";
import "./GoBack.scss";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return <button className="black go-back">Go Back</button>;
};

export default GoBack;
