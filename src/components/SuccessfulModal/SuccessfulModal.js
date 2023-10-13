const SuccessfulModal = ({ isOpen, onClose, switchToLoginModal }) => {
  const handleCloseModalOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "modal__open" : ""}`}
      onClick={handleCloseModalOverlayClick}
    >
      <div className="modal__success">
        <h2 className="modal__success-text">
          Registration successfully completed!
        </h2>
        <h2 className="modal__success-button" onClick={switchToLoginModal}>
          Sign in
        </h2>
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default SuccessfulModal;
