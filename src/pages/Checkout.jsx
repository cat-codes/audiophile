import { useState, useEffect, useRef } from "react";
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
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Creates refs for the form fields
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const zipRef = useRef(null);
  const cityRef = useRef(null);
  const countryRef = useRef(null);
  const eMoneyNumberRef = useRef(null);
  const eMoneyPinRef = useRef(null);

  // Resetts openConfirm when the component mounts
  useEffect(() => {
    setOpenConfirm(false);
  }, []);

  // Enables the submit button based on form validation
  useEffect(() => {
    console.log("Form data:", formData);
  }, [formData, selectedOption]);

  // Opens confirmation after submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    console.log("isSubmitted: ", isSubmitted);

    if (validateForm()) {
      setOpenConfirm(true);
    } else {
      setTimeout(scrollToError, 0);
    }
  };

  // Scroll to the first error
  const scrollToError = () => {
    if (formErrors.name) {
      nameRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (formErrors.email) {
      emailRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (formErrors.phone) {
      phoneRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (formErrors.address) {
      addressRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (formErrors.zip) {
      zipRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (formErrors.city) {
      cityRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (formErrors.country) {
      countryRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (formErrors.eMoneyNumber) {
      eMoneyNumberRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (formErrors.eMoneyPin) {
      eMoneyPinRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log("isSubmitted: ", isSubmitted);
  console.log("openConfirm: ", openConfirm);

  // Gets form input
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Clears the specific error for the input field being changed
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined, // Clear the specific error message for this field
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validates form
  const validateForm = () => {
    const errors = {};
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

    // Required field check
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!phone) errors.phone = "Phone number is required";
    if (!address) errors.address = "Address is required";
    if (!zip) errors.zip = "ZIP code is required";
    if (!city) errors.city = "City is required";
    if (!country) errors.country = "Country is required";

    // Format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      errors.email = "Invalid email format";
    }

    const phoneRegex = /^[0-9]+$/;
    if (phone && !phoneRegex.test(phone)) {
      errors.phone = "Invalid phone number format";
    }

    // Payment option validation
    if (!selectedOption) {
      errors.payment = "Please select a payment method";
    }

    // e-Money validation if selected
    if (selectedOption === "e-Money") {
      if (!eMoneyNumber) errors.eMoneyNumber = "e-Money number is required";
      if (!eMoneyPin) errors.eMoneyPin = "e-Money PIN is required";
    }

    setFormErrors(errors);
    console.log("errors: ", errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
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
                  ref={nameRef}
                  label="Name"
                  placeholder="Alexei Ward"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={isSubmitted && formErrors.name}
                />
                <Form
                  ref={emailRef}
                  label="Email address"
                  placeholder="alexei@mail.com"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={isSubmitted && formErrors.email}
                />
                <Form
                  ref={phoneRef}
                  label="Phone Number"
                  placeholder="+1 202-555-0136"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={isSubmitted && formErrors.phone}
                />
              </div>
            </section>

            {/* Shipping Info */}
            <section className="checkout-form-section">
              <p className="nav accent-color">Shipping info</p>
              <div className="checkout-form-section-grid">
                <Form
                  ref={addressRef}
                  label="Your Address"
                  placeholder="1137 Williams Avenue"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  error={isSubmitted && formErrors.address}
                />
                <Form
                  ref={zipRef}
                  label="ZIP Code"
                  placeholder="10001"
                  type="number"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  error={isSubmitted && formErrors.zip}
                />
                <Form
                  ref={cityRef}
                  label="City"
                  placeholder="New York"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  error={isSubmitted && formErrors.city}
                />
                <Form
                  ref={countryRef}
                  label="Country"
                  placeholder="United States"
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  error={isSubmitted && formErrors.country}
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
                {formErrors.payment && (
                  <div className="error-message">
                    {isSubmitted && formErrors.payment}
                  </div>
                )}
              </div>

              {/* Conditionally render e-Money fields */}
              {isEMoneySelected && (
                <div className="checkout-form-section-grid" id="optional">
                  <Form
                    ref={eMoneyNumberRef}
                    label="e-Money Number"
                    placeholder="238521993"
                    type="number"
                    name="eMoneyNumber"
                    value={formData.eMoneyNumber}
                    onChange={handleInputChange}
                    error={isSubmitted && formErrors.eMoneyNumber}
                  />
                  <Form
                    ref={eMoneyPinRef}
                    label="e-Money PIN"
                    placeholder="6891"
                    type="number"
                    name="eMoneyPin"
                    value={formData.eMoneyPin}
                    onChange={handleInputChange}
                    error={isSubmitted && formErrors.eMoneyPin}
                  />
                </div>
              )}
            </section>
          </form>

          <div className="checkout-summary">
            <Summary />
            <Submit onClick={handleSubmit} />
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
