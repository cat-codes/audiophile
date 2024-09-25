import { useState, useEffect } from "react";
import "./Checkout.scss";
import GoBack from "../components/buttons/GoBack";
import Form from "../components/Form";
import Summary from "../components/Summary";
import Submit from "../components/buttons/Submit";
import OrderConfirm from "../components/OrderConfirm";

const Checkout = () => {
  // State to track form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedOption, setSelectedOption] = useState("e-Money");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  // Resetts openConfirm when the component mounts
  useEffect(() => {
    setOpenConfirm(false);
  }, []);

  // Enables the submit button based on form validation
  useEffect(() => {
    console.log("Form data:", formData);
    console.log("Is Submit Disabled:", isSubmitDisabled);
    setIsSubmitDisabled(!validateForm());
  }, [formData, selectedOption]);

  // Opens confirmation after submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setOpenConfirm(true);
    }
  };

  // Gets form input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validates form
  const validateForm = () => {
    const {
      name,
      email,
      phone,
      address,
      zip,
      city,
      country,
      eMoneyNumber,
      eMoneyPin,
    } = formData;

    // Basic fields must be filled
    if (!name || !email || !phone || !address || !zip || !city || !country) {
      return false;
    }

    // If e-Money is selected, e-Money fields must be filled
    if (selectedOption === "e-Money") {
      if (!eMoneyNumber || !eMoneyPin) {
        return false;
      }
    }

    return true; // All required fields are filled
  };

  // Gets a selected option from payment method form
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Checks if the selected option is e-money
  const isEMoneySelected = selectedOption === "e-Money";

  return (
    <div className="container">
      <div className="page">
        <GoBack />
        <div className="checkout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h4>checkout</h4>
            {/* Billing Details */}
            <section className="checkout-form-section">
              <p className="nav accent-color">Billing details</p>
              <div className="checkout-form-section-grid">
                <Form
                  label="Name"
                  placeholder="Alexei Ward"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <Form
                  label="Email address"
                  placeholder="alexei@mail.com"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Form
                  label="Phone Number"
                  placeholder="+1 202-555-0136"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </section>

            {/* Shipping Info */}
            <section className="checkout-form-section">
              <p className="nav accent-color">Shipping info</p>
              <div className="checkout-form-section-grid">
                <Form
                  label="Your Address"
                  placeholder="1137 Williams Avenue"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
                <Form
                  label="ZIP Code"
                  placeholder="10001"
                  type="number"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                />
                <Form
                  label="City"
                  placeholder="New York"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                <Form
                  label="Country"
                  placeholder="United States"
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
            </section>

            {/* Payment Details */}
            <section className="checkout-form-section">
              <p className="nav accent-color">Payment details</p>
              <div className="checkout-form-section-grid">
                <div>
                  <div className="label-payment">Payment Method</div>
                  <div className="form-radio">
                    <input
                      type="radio"
                      id="e-Money"
                      name="paymentOption"
                      value="e-Money"
                      checked={selectedOption === "e-Money"}
                      onChange={handleOptionChange}
                    ></input>
                    <label htmlFor="e-Money">e-Money</label>
                  </div>
                </div>
                <div className="form-radio">
                  <input
                    type="radio"
                    id="Cash on Delivery"
                    name="paymentOption"
                    value="Cash on Delivery"
                    checked={selectedOption === "Cash on Delivery"}
                    onChange={handleOptionChange}
                  ></input>
                  <label htmlFor="Cash on Delivery">Cash on Delivery</label>
                </div>
              </div>

              {/* Conditionally render e-Money fields */}
              {isEMoneySelected && (
                <div className="checkout-form-section-grid" id="optional">
                  <Form
                    label="e-Money Number"
                    placeholder="238521993"
                    type="number"
                    name="eMoneyNumber"
                    value={formData.eMoneyNumber}
                    onChange={handleInputChange}
                  />
                  <Form
                    label="e-Money PIN"
                    placeholder="6891"
                    type="number"
                    name="eMoneyPin"
                    value={formData.eMoneyPin}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </section>
          </form>

          <div className="checkout-summary">
            <Summary />
            <Submit onClick={handleSubmit} disabled={isSubmitDisabled} />
          </div>

          <OrderConfirm
            openConfirm={openConfirm}
            onClose={() => setOpenConfirm(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
