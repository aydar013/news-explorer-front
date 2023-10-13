import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useFormValidation } from "../../hooks/useFormValidation";

const LoginModal = ({
  isOpen,
  handleLogin,
  isActive,
  onClose,
  switchToSignUpModal,
  isLoading,
}) => {
  const { values, handleChange, setValues, isValid, setIsValid, isInvalid } =
    useFormValidation({
      email: "",
      password: "",
    });

  useEffect(() => {
    if (Object.values(isInvalid).every((item) => item === false)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isInvalid, setIsValid]);

  useEffect(() => {
    if (isActive) {
      setValues({
        email: "",
        password: "",
      });
    }
  }, [isActive, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
  };

  return (
    <ModalWithForm
      buttonText={isLoading ? "Signing in..." : "Sign in"}
      title="Sign in"
      name="sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="modal__label-flex">
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          minLength={1}
          maxLength={30}
          pattern="[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      {isInvalid.email && (
        <div className="error-message">
          <ErrorMessage
            errorMessage={"Invalid email address"}
            className={"error-message__signin-email"}
          />
        </div>
      )}
      <label className="modal__label-flex modal__label-login">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange}
          minLength={4}
          maxLength={30}
          required
        />
      </label>
      {isInvalid.password && (
        <div className="error-message">
          <ErrorMessage
            errorMessage={"Invalid password"}
            className={`error-message__signin-password`}
          />
        </div>
      )}
      <p type="button" className="switch__login" onClick={switchToSignUpModal}>
        or <span className="switch__login-signup">Sign up</span>
      </p>
    </ModalWithForm>
  );
};

export default LoginModal;
