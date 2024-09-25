import "./GoBack.scss";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="back">
      <button className="black" type="button" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
};

export default GoBack;
