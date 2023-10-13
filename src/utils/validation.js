const SignInValidation = (email, password) => {
  return (
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gim.test(email) &&
    password.length >= 4
  );
};

const SignInEmailValidation = (email) => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gim.test(email);
};

const SignInPasswordValidation = (password) => {
  return password.length < 4;
};

const RegisterValidation = (email, password, name) => {
  return (
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gim.test(email) &&
    password.length >= 4 &&
    name.length > 0
  );
};

const RegisterEmailValidation = (email) => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gim.test(email);
};

const RegisterPasswordValidation = (password) => {
  return password.length >= 4;
};

const RegisterNameValidation = (name) => {
  return name.length > 0;
};

export {
  SignInValidation,
  SignInEmailValidation,
  SignInPasswordValidation,
  RegisterValidation,
  RegisterEmailValidation,
  RegisterPasswordValidation,
  RegisterNameValidation,
};
