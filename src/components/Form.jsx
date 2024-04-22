import "./Form.scss";

const Form = ({ label, placeholder, type }) => {
  return (
    <form className="black">
      <label htmlFor={label}>{label}</label>
      <input type={type} placeholder={placeholder} name={label} />
    </form>
  );
};

export default Form;
