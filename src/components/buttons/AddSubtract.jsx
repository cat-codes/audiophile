import "./AddSubtract.scss";

const AddSubtract = ({ quantityToHandle, handleSubtract, handleAdd }) => {
  return (
    <div className="add-subtract">
      <button
        type="button"
        onClick={handleSubtract}
        aria-label="Decrease Quantity"
      >
        -
      </button>

      <p type="button" className="black">
        {quantityToHandle}
      </p>

      <button type="button" onClick={handleAdd} aria-label="Increase Quantity">
        +
      </button>
    </div>
  );
};

export default AddSubtract;
