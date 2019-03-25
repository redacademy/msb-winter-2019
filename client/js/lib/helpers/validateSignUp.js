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

export const isLegalAge = dateOfBirth => {
  const today = new Date();
  dateOfBirth = new Date(dateOfBirth);
  let age = today.getFullYear() - dateOfBirth.getFullYear();
  const month = today.getMonth() - dateOfBirth.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < dateOfBirth.getDate())) {
    age--;
  }
  return age >= 19;
};
