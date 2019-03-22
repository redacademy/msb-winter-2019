export default function validate(values, isLegal) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email || values.email === '') {
    errors.email = 'Email is required';
  } else if (/.*@.*\..*/.test(values.email) === false) {
    errors.email = 'Please enter a valid email';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  if (!isLegal) {
    errors.isLegal = 'Required';
  }

  return errors;
}
