import "./Summary.scss";
import { GetCart } from "./CartContext";

const Summary = () => {
  const { cart, totalPrice } = GetCart();
  const totalAndVAT = Number((totalPrice * 1.2).toFixed(2));
  const grandTotal = totalAndVAT + 50;
  console.log(typeof grandTotal);

  return (
    <div className="summary">
      <p className="summary-title black">Summary</p>

      <section className="summary-items">
        <ul className="summary-items-list">
          {cart.map((item, index) => (
            <li key={index}>
              <section className="summary-items-list-left">
                <img
                  className="item-img"
                  src={`/assets/item-page/mobile/${item.img}/${item.img}-preview.jpg`}
                />
                <section className="item-info">
                  <p className="item-info-title black">{item.short}</p>
                  <p className="item-info-price black">{item.priceStr}</p>
                </section>
              </section>
              <p className="item-qty">x {item.quantity}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="summary-info">
        <div className="summary-info-piece black">
          <section className="label">Total</section>
          <section className="price">$ {totalPrice.toFixed(2)}</section>
        </div>
        <div className="summary-info-piece black">
          <section className="label">Shipping</section>
          <section className="price">$ 50.00</section>
        </div>
        <div className="summary-info-piece black">
          <section className="label">VAT (included)</section>
          <section className="price">$ {totalAndVAT.toFixed(2)}</section>
        </div>
      </section>
      <section className="summary-info-total">
        <p className="summary-info-piece black">
          <section className="label">Grand Total</section>
          <section className="price accent-color">
            $ {grandTotal.toFixed(2)}
          </section>
        </p>
      </section>
    </div>
  );
};

export default Summary;
