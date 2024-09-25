import "./RemoveAll.scss";
import { GetCart } from "../CartContext";

const RemoveAll = () => {
  const { updateCart } = GetCart();

  const handleRemoveAll = () => {
    updateCart([]);
  };

  return (
    <button className="remove-all" onClick={() => handleRemoveAll()}>
      Remove all
    </button>
  );
};

export default RemoveAll;
