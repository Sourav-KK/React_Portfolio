interface formDataI {
  first_name: string;
  last_name: string;
  phone_no: string;
  email: string;
  subject: string;
  message: string;
}

const initialVal: formDataI = {
  first_name: "",
  last_name: "",
  phone_no: "",
  email: "",
  subject: "",
  message: "",
};

const validate = (values: formDataI) => {
  const errors = {
    first_name: "",
    last_name: "",
    phone_no: "",
    email: "",
    subject: "",
    message: "",
  };

  const regXName = /^[A-Za-z]+$/;
  const regXSentence = /^[\w\s,.*@()?'"/%^&!]+$/;
  const regXPhone = /^(0|[1-9]\d*)$/;

  // First name
  if (!values.first_name) {
    errors.first_name = "Required";
  }
  if (values.first_name.length > 15) {
    errors.first_name = "Must be 15 characters or less";
  }
  if (values.first_name.length < 3) {
    errors.first_name = "Must have minimum 3 characters ";
  }
  if (!values.first_name.match(regXName)) {
    errors.first_name = "Should contain only alphabets";
  }

  // Last name
  if (!values.last_name) {
    errors.last_name = "Required";
  }
  if (values.last_name.length > 20) {
    errors.last_name = "Must be 20 characters or less";
  }
  if (values.last_name.length < 3) {
    errors.last_name = "Must have minimum 3 characters ";
  }
  if (!values.last_name.match(regXName)) {
    errors.last_name = "Should contain only alphabets";
  }

  //   Subject
  if (!values.subject) {
    errors.subject = "Required";
  }
  if (values.subject.length > 40) {
    errors.subject = "Must be 40 characters or less";
  }
  if (values.subject.length < 10) {
    errors.subject = "Must have minimum 10 characters";
  }
  if (!values.subject.match(regXSentence)) {
    errors.subject = "Should contain only alphabets";
  }

  //   Message
  if (!values.message) {
    errors.message = "Required";
  }
  if (values.message.length > 500) {
    errors.message = "Too lengthy";
  }
  if (values.message.length < 20) {
    errors.message = "Must have minimum 20 characters ";
  }
  if (!values.message.match(regXSentence)) {
    errors.message = "Should contain only alphabets";
  }

  //   phone number
  console.log("phone:", values.phone_no);
  console.log("typew phone:", typeof values.phone_no);
  if (values.phone_no.length > 10) {
    errors.phone_no = "Must have 10 digits";
  }

  if (values.phone_no.length < 10) {
    errors.phone_no = "Must have 10 digits";
  }
  if (values.phone_no.match(regXPhone)) {
    errors.phone_no = "Must contain only numbers";
  }
  //   Email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export { validate, initialVal };
