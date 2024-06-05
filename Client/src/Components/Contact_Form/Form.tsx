// import ResetButton from "@components/Contact_Form/ResetButton";
import React, { useState } from "react";
import Submit_btn from "@components/Contact_Form/Submit_btn";
import { formDataI } from "@utils/interfaces";
import ResetButton from "./ResetButton";
import Inputs from "./Inputs";
import Subject_comp from "./Subject";
import Message_comp from "./Message_comp";
import { initialVal, validateee } from "@utils/Form_Validation";

const Form = () => {
  const [submiting, setSubmiting] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<formDataI>(initialVal);
  const [validationerror, setValidationError] = useState<formDataI>(initialVal);

  const handleBlur = async () => {
    console.log("handleBlur");
    const err = await validateee(formValues);
    setValidationError(err);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleReset = () => {
    setFormValues(initialVal);
    setValidationError(initialVal);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setSubmiting(true);

      const data = JSON.stringify(formValues);
      console.log("data:", data);
      const URL: string = "http://localhost:3001/contact";

      const response = await fetch(URL, {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("server response:", response);
    } catch (error) {
      console.error("error in submting:", error);
      setSubmiting(false);
    } finally {
      setSubmiting(false);
    }
    event.preventDefault();
  };

  return (
    <>
      <form className="grid grid-cols-1 p-4 gap-y-2" onSubmit={handleSubmit}>
        {/* first_name + last_name */}
        <Inputs
          placeHold1="FIRST NAME *"
          placeHold2="LAST NAME *"
          fieldName1="first_name"
          fieldName2="last_name"
          val1={formValues.first_name}
          val2={formValues.last_name}
          type1="text"
          type2="text"
          err1={validationerror.first_name}
          err2={validationerror.last_name}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />

        {/* email + phone */}
        <Inputs
          placeHold1="EMAIL *"
          placeHold2="PHONE NO"
          fieldName1="email"
          fieldName2="phone_no"
          val1={formValues.email}
          val2={formValues.phone_no}
          type1="email"
          type2="tel"
          err1={validationerror.email}
          err2={validationerror.phone_no}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />

        {/* subject */}
        <Subject_comp
          errName={validationerror.subject}
          val={formValues.subject}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />

        {/* Message */}
        <Message_comp
          errName={validationerror.message}
          val={formValues.message}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />

        <Submit_btn />
      </form>
      <ResetButton action={handleReset} />
    </>
  );
};

export default Form;
