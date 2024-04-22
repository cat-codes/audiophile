import "./Button1.scss";

const Button1 = ({ purpose, onClick }) => {
  return (
    <button
      type="button"
      className="button button1 btn-qty white"
      onClick={onClick}
    >
      {purpose}
    </button>
  );
};

export default Button1;
