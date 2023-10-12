import React, { useEffect } from "react";

const ModalWithForm = ({
  buttonText,
  name,
  title,
  children,
  isOpen,
  onClose,
  onSubmit,
  isValid,
}) => {
  const handleCloseModalOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  const submitButton = isValid
    ? "modal__submit-button modal__submit-button-valid"
    : "modal__submit-button";

  return (
    <div className="modal" onClick={handleCloseModalOverlayClick}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <h3 className="modal__title">{title}</h3>
        <form name={name} className="modal__form" onSubmit={onSubmit}>
          {children}
          <button className={submitButton} type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
