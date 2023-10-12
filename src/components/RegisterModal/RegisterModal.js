import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import { useFormValidation } from "../../hooks/useFormValidation";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const RegisterModal = ({
  isOpen,
  handleRegister,
  isActive,
  onClose,
  switchToLoginModal,
  isLoading,
}) => {
  const { values, handleChange, setValues, isValid, setIsValid, isInvalid } =
    useFormValidation({
      email: "",
      password: "",
      name: "",
    });

  useEffect(
    (e) => {
      if (Object.values(isInvalid).every((item) => item === false)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    },
    [isInvalid, setIsValid]
  );

  useEffect(() => {
    if (isActive) {
      setValues({
        email: "",
        password: "",
        name: "",
      });
    }
  }, [isActive, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(values);
  };

  return (
    <ModalWithForm
      buttonText={isLoading ? "Signing up..." : "Sign up"}
      title="Sign up"
      name="signup"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="modal__label-flex modal__label-register">
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          minLength={1}
          maxLength={30}
          placeholder="Enter email"
          autoComplete="off"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      {isInvalid.email && (
        <div className="error-message">
          <ErrorMessage
            errorMessage={"Invalid email address"}
            className={" error-message__register-email"}
          />
        </div>
      )}
      <label className="modal__label-flex modal__label-register">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange}
          autoComplete="off"
          minLength={4}
          maxLength={35}
          required
        />
      </label>
      {isInvalid.password && (
        <div className="error-message">
          <ErrorMessage
            errorMessage={"Invalid password"}
            className={"error-message__register-password"}
          />
        </div>
      )}
      <label className="modal__label-flex modal__label-register">
        Username
        <input
          className="modal__input"
          type="text"
          name="name"
          placeholder="Enter your username"
          value={values.name}
          onChange={handleChange}
          minLength={3}
          maxLength={30}
          autoComplete="off"
          required
        />
      </label>
      {isInvalid.name && (
        <div className="error-message">
          <ErrorMessage
            errorMessage={"Invalid username"}
            className={"error-message__register-username"}
          />
        </div>
      )}
      <p type="button" className="switch__login" onClick={switchToLoginModal}>
        or <span className="switch__login-signup">Sign in</span>
      </p>
    </ModalWithForm>
  );
};

export default RegisterModal;
