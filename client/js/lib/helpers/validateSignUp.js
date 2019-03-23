export default function validate(values) {
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

  if (!values.confirmpassword) {
    errors.confirmpassword = '*Required field';
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = '*Password mismatched';
  }

  return errors;
}
