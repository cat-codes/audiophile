import { useState, createContext, useContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    "Email address": "",
    "Phone Number": "",
    "Your Address": "",
    "ZIP Code": "",
    City: "",
    Country: "",
    "Payment Details": "",
    "e-Money Number": "",
    "e-Money PIN": "",
  });

  // Tracks changes within form input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log("formData: ", formData);

  // Handles submit event by either opening a confirmation overlay or throwing the error
  const handleSubmit = (event) => {
    event.preventDefault();

    // Sets isSubmited state to true
    setIsSubmitted(true);
    const keys = Object.keys(formData);

    // Checks if the fields aren't empty after trimming
    const filled = keys.every((key) => formData[key].trim() !== "");

    // Throws error if unfilled forms are found
    if (!filled) {
      console.log("Please fill out all the fields.");
      return;
    }

    // Confirms successful submission
    setIsFormFilled(filled);
    console.log("Form submitted successfully.");

    // Resets all form fields to empty strings
    setFormData(keys.reduce((acc, key) => ({ ...acc, [key]: "" }), {}));

    // Opens overlay
    setOpenConfirm(true);
    console.log("Confirm notification open?", !openConfirm);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        openConfirm,
        setOpenConfirm,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
