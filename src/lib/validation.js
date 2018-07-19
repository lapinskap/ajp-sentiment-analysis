const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const required = value => (value ? undefined : "Field is required");

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const password = value =>
  value 
    ? "Wrong password"
    : undefined;

export { composeValidators, required, email, password};
