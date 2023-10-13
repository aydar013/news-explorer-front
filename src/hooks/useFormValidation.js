import { useState } from "react";

export const useFormValidation = (inputValues) => {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState(inputValues);
  const [isInvalid, setIsInvalid] = useState(inputValues);
  const [isValid, setIsValid] = useState(false);

  const checkValidity = (e) => {
    const { name, validationMessage } = e.target;

    if (!e.target.validity.valid) {
      setIsInvalid({ ...isInvalid, [name]: true });
      setErrors({ ...errors, [name]: validationMessage });
    } else {
      setIsInvalid({ ...isInvalid, [name]: false });
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
    checkValidity(e);
  };

  return {
    values,
    handleChange,
    setValues,
    isValid,
    setIsValid,
    isInvalid,
  };
};
