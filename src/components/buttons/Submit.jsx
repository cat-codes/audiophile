import "./Button1.scss";

const Submit = ({ onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
  };
  return (
    <button className="button1" type="submit" onClick={handleClick}>
      Continue & Pay
    </button>
  );
};

export default Submit;
