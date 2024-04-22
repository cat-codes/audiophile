import "./Button3.scss";

const Button3 = ({ purpose }) => {
  return (
    <button type="button" className="button button3 btn-qty black">
      {purpose}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
      >
        <path
          d="M1.32178 1L6.32178 6L1.32178 11"
          stroke="#D87D4A"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};

export default Button3;
