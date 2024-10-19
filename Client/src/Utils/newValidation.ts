import { newformDataErrI, newformDataI } from "@utils/interfaces";

const newinitialVal: newformDataI = {
  full_name: "",
  email: "",
  subject: "",
  message: "",
};

const validationErrors: newformDataErrI = {
  full_nameErr: "",
  emailErr: "",
  subjectErr: "",
  messageErr: "",
};

const newvalidateee = (values: newformDataI) => {

  const regXName = /^[A-Za-z]+$/;
  const regXSentence = /^[\w\s,.*@()?'"/%^&!]+$/;

  // First name
  if (!values.full_name) {
    validationErrors.full_nameErr = "Required";
    return validationErrors;
  }
  if (values.full_name.length > 15) {
    validationErrors.full_nameErr = "Must be 15 characters or less";
    return validationErrors;
  }
  if (values.full_name.length < 3) {
    validationErrors.full_nameErr = "Must have minimum 3 characters ";
    return validationErrors;
  }
  if (!values.full_name.match(regXName)) {
    validationErrors.full_nameErr = "Should contain only alphabets";
    return validationErrors;
  }
  

  //   Email
  if (!values.email) {
    validationErrors.emailErr = "Required";
    return validationErrors;
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    validationErrors.emailErr = "Invalid email address";
    return validationErrors;
  }

  //   phone number
  // if (values.phone_no.length !== 10) {
  //   validationErrors.phone_no = "Must have 10 digits";
  //   return validationErrors;
  // }

  //   Subject
  if (!values.subject) {
    validationErrors.subjectErr = "Required";
    return validationErrors;
  }
  if (values.subject.length > 40) {
    validationErrors.subjectErr = "Must be 40 characters or less";
    return validationErrors;
  }
  if (values.subject.length < 10) {
    validationErrors.subjectErr = "Must have minimum 10 characters";
    return validationErrors;
  }
  if (!values.subject.match(regXSentence)) {
    validationErrors.subjectErr = "Should contain only alphabets";
    return validationErrors;
  }

  //   Message
  if (values.message.length < 1) {
    validationErrors.messageErr = "Required";
    return validationErrors;
  }
  if (values.message.length > 500) {
    validationErrors.messageErr = "Too lengthy";
    return validationErrors;
  }
  if (values.message.length < 20) {
    validationErrors.messageErr = "Must have minimum 20 characters ";
    return validationErrors;
  }
  if (!values.message.match(regXSentence)) {
    validationErrors.messageErr = "Should contain only alphabets";
    return validationErrors;
  }

  console.log("validationErrors in validation:", validationErrors);

  return validationErrors;
};

export { newvalidateee, newinitialVal,validationErrors };
