import { formDataI } from "@utils/interfaces";

const initialVal: formDataI = {
  first_name: "",
  last_name: "",
  phone_no: "",
  email: "",
  // subject: "",
  message: "",
};

const validateee = (values: formDataI) => {
  const errors: formDataI = {
    first_name: "",
    last_name: "",
    phone_no: "",
    email: "",
    // subject: "",
    message: "",
  };

  const regXName = /^[A-Za-z]+$/;
  const regXSentence = /^[\w\s,.*@()?'"/%^&!]+$/;

  // First name
  if (!values.first_name) {
    errors.first_name = "Required";
    return errors;
  }
  if (values.first_name.length > 15) {
    errors.first_name = "Must be 15 characters or less";
    return errors;
  }
  if (values.first_name.length < 3) {
    errors.first_name = "Must have minimum 3 characters ";
    return errors;
  }
  if (!values.first_name.match(regXName)) {
    errors.first_name = "Should contain only alphabets";
    return errors;
  }

  // Last name
  if (!values.last_name) {
    errors.last_name = "Required";
    return errors;
  }
  if (values.last_name.length > 20) {
    errors.last_name = "Must be 20 characters or less";
    return errors;
  }
  if (values.last_name.length < 3) {
    errors.last_name = "Must have minimum 3 characters ";
    return errors;
  }
  if (!values.last_name.match(regXName)) {
    errors.last_name = "Should contain only alphabets";
    return errors;
  }

  //   Email
  if (!values.email) {
    errors.email = "Required";
    return errors;
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
    return errors;
  }

  //   phone number
  // if (values.phone_no.length !== 10) {
  //   errors.phone_no = "Must have 10 digits";
  //   return errors;
  // }

  // //   Subject
  // if (!values.subject) {
  //   errors.subject = "Required";
  //   return errors;
  // }
  // if (values.subject.length > 40) {
  //   errors.subject = "Must be 40 characters or less";
  //   return errors;
  // }
  // if (values.subject.length < 10) {
  //   errors.subject = "Must have minimum 10 characters";
  //   return errors;
  // }
  // if (!values.subject.match(regXSentence)) {
  //   errors.subject = "Should contain only alphabets";
  //   return errors;
  // }

  //   Message
  if (values.message.length < 1) {
    errors.message = "Required";
    return errors;
  }
  if (values.message.length > 500) {
    errors.message = "Too lengthy";
    return errors;
  }
  if (values.message.length < 20) {
    errors.message = "Must have minimum 20 characters ";
    return errors;
  }
  if (!values.message.match(regXSentence)) {
    errors.message = "Should contain only alphabets";
    return errors;
  }

  console.log("errors in validation:", errors);

  return errors;
};

export { validateee, initialVal };
