import "./OrderConfirm.scss";
import { motion, AnimatePresence } from "framer-motion";
import { GetCart } from "../components/CartContext";
import Check from "../assets/svg/Check";
import Button1 from "./buttons/Button1";
import { Link } from "react-router-dom";

const OrderConfirm = ({ openConfirm, onClose }) => {
  const { cart, setCart, totalPrice, totalQty } = GetCart();

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const confirmationVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 },
  };

  return (
    <AnimatePresence>
      {openConfirm && (
        <motion.div
          className="overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5, ease: "anticipate" }}
        >
          <motion.div
            className="confirmation"
            variants={confirmationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5, ease: "anticipate" }}
          >
            <div className="confirmation-content">
              <Check />
              <h3>
                thank you
                <br /> for your order
              </h3>
              <p>You will receive an email confirmation shortly.</p>

              <section className="confirmation-content-summary">
                <div className="confirmation-content-summary-top">
                  <div
                    className="confirmation-content-summary-top-item"
                    style={{
                      borderBottom:
                        totalQty - cart[0]?.quantity > 0
                          ? "1px solid rgb(0, 0, 0, 0.08)"
                          : "none",
                    }}
                  >
                    <img
                      src={`/src/assets/item-page/mobile/${cart[0]?.img}/${cart[0]?.img}-preview.jpg`}
                    />
                    <div className="confirmation-content-summary-top-item-details">
                      <p className="name">{cart[0]?.itemName}</p>
                      <p className="price">$ {cart[0]?.price}</p>
                    </div>
                    <div className="qty">x{cart[0]?.quantity}</div>
                  </div>
                  <p
                    className="confirmation-content-summary-top-other"
                    style={{
                      display:
                        totalQty - cart[0]?.quantity > 0 ? "block" : "none",
                    }}
                  >
                    and {totalQty - cart[0]?.quantity} other item(s)
                  </p>
                </div>
                <div className="confirmation-content-summary-total white">
                  <p className="grand-total">Grand total</p>
                  <p className="confirmation-content-summary-total-price">
                    $ {totalPrice}
                  </p>
                </div>
              </section>
              <div className="button">
                <Link
                  to={`/home`}
                  onClick={() => {
                    onClose();
                    setCart([]);
                  }}
                >
                  <Button1 purpose="back to home" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderConfirm;
