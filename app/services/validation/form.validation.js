import { isInputName, isInputEmail, isTextarea } from './input.validation';

const isValidForm = (form, data) => {
  let errors = {};
  console.log(data)
  const { firstname, lastname, email, textarea } = data;

  errors.firstname = firstname && isInputName('firstname', firstname);
  errors.lastname = lastname && isInputName('lastname', lastname);
  errors.email = email && isInputEmail('email', email);
  errors.textarea = textarea && isTextarea('message', textarea);

  for (let err in errors) {
    if (!errors[err])
      delete errors[err]
  }

  return Object.keys(errors).length 
  ? { errors: errors }
  :false
};

export default isValidForm;