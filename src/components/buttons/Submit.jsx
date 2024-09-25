import "./Button1.scss";

const Submit = ({ onClick, disabled }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick && !disabled) onClick(e);
  };

  return (
    <button
      className="button1"
      type="submit"
      onClick={handleClick}
      disabled={disabled}
      style={{
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      Continue & Pay
    </button>
  );
};

export default Submit;
