// import ResetButton from "@components/Contact_Form/ResetButton"

import { newformDataErrI, newformDataI } from "@utils/interfaces";
import FormFields from "./formFields";
import { useState } from "react";
import {
  newinitialVal,
  newvalidateee,
  validationErrors,
} from "@utils/newValidation";
import ResetButton from "@components/FormComp/ResetButton";
import Label_Err from "./Label_Err";
import useFormSubmitHook from "Hooks/FormSubmitHook";

const Form_contact = () => {
  const [formValues, setFormValues] = useState<newformDataI>(newinitialVal);
  // const [submiting, setSubmiting] = useState<boolean>(false);

  const [validationerror, setValidationError] =
    useState<newformDataErrI>(validationErrors);

  const { handleSubmit, submitErr, submiting } = useFormSubmitHook();

  const handleReset = () => {
    setFormValues(newinitialVal);
    setValidationError(validationErrors);
  };

  const handleBlur = async () => {
    console.log("handleBlur");
    const err = await newvalidateee(formValues);
    console.log("error validation in handleblur", err);
    setValidationError(err);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <section
      className="flex bg-sky-800 min-h-screen justify-center place-items-center"
      id="contactSection"
    >
      <div className="collapse bg-base-200 collapse-plus w-[85%] ">
        <input type="checkbox" className="peer" />
        <div className="collapse-title uppercase font-bold font-mono text-3xl md:text-4xl text-center bg-slate-100 peer-checked:bg-slate-100 peer-checked:text-stone-800 text-stone-700 border-2 border-stone-200">
          Contact
        </div>
        {submitErr && <span>{submitErr}</span>}
        <div className="collapse-content bg-bg-slate-100 text-primary-content peer-checked:bg-slate-100 peer-checked:text-secondary-content border p-2 ">
          <form
            className="grid grid-cols-1 p-4 gap-y-2"
            onSubmit={(event) => handleSubmit(event, formValues)}
          >
            <FormFields
              changeFn={handleChange}
              formValues={formValues}
              validationerror={validationerror}
              handleBlur={handleBlur}
            />

            {/* subject */}
            <fieldset>
              <div className="grid">
                <Label_Err
                  errId="errSubject"
                  errMessage={validationErrors.subjectErr}
                  field="Subject *"
                  labelFor="subject"
                  // isError={validationerror.subjectErr}
                />
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Ener your subject"
                  className="bg-transparent border-2 border-stone-500 p-2 rounded-md"
                  max={50}
                  required
                  onChange={handleChange}
                  value={formValues.subject}
                />
              </div>
            </fieldset>

            {/* message */}
            <fieldset>
              <div className="grid">
                <Label_Err
                  errId="errMEsaage"
                  errMessage={validationErrors.messageErr}
                  field="Message *"
                  labelFor="message"
                  // isError={validationerror.messageErr}
                />
                <textarea
                  name="message"
                  id="message"
                  className="bg-transparent border-2 border-stone-500 p-2 rounded-md"
                  placeholder="Enter your message"
                  wrap="hard"
                  onChange={handleChange}
                  value={formValues.message}
                ></textarea>
              </div>
            </fieldset>

            {/* button */}
            <div className="flex p-4 justify-center align-middle">
              <input
                type="submit"
                value="Send Message"
                placeholder="Submit"
                name="submitBtn"
                className="bg-blue-700 p-2 rounded-md text-stone-100 hover:bg-blue-800 hover:text-stone-50 "
                disabled={submiting ? true : false}
                title={submiting ? "Disabled" : "Click to contact"}
              />
            </div>
          </form>
          <ResetButton action={handleReset} />
        </div>
      </div>
    </section>
  );
};

export default Form_contact;
