export default function validate(values, isLegal) {
  const errors = {};

  if (!values.name) {
    errors.name = '*Required field';
  }

  if (!values.email || values.email === '') {
    errors.email = '*Required field';
  } else if (/.*@.*\..*/.test(values.email) === false) {
    errors.email = '*Please enter a valid email address';
  }

  if (!values.password) {
    errors.password = '*Required field';
  }

  if (!isLegal) {
    errors.isLegal = '*Required field';
  }

  return errors;
}
