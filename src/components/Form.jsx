import "./Form.scss";

const Form = ({ label, placeholder, type, name, value, onChange }) => {
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
      />
    </form>
  );
};

export default Form;
