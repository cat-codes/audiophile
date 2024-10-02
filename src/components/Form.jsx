import "./Form.scss";

const Form = ({ label, placeholder, type, name, value, onChange, error }) => {
  return (
    <form className="black">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? "error" : ""}
      />
      {error && <span className="error-message">{error}</span>}
    </form>
  );
};

export default Form;
