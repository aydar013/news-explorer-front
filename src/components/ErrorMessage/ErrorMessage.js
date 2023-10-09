const ErrorMessage = ({ errorMessage, className }) => {
  return (
    <>
      <p className={className}>{errorMessage}</p>
    </>
  );
};

export default ErrorMessage;
