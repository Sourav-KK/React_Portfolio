import { newformDataErrI, newformDataI } from "@utils/interfaces";
import FormInput from "./formInput";

const FormFields = ({
  changeFn,
  formValues,
  validationerror,
  handleBlur
}: {
  changeFn: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  formValues: newformDataI;
  validationerror: newformDataErrI;
  handleBlur: () => Promise<void>
}) => {
  const userNameArr = [
    {
      index: 101,
      errMessage: validationerror.full_nameErr,
      errId: "errFullname",
      field: "Full Name *",
      fieldId: "full_name",
      fieldName: "full_name",
      fieldType: "text",
      placeHolder: "Eg: John Doe",
      labelFor: "full_name",
      val: formValues.full_name,
    },
    {
      index: 102,
      errMessage: validationerror.emailErr,
      errId: "errEmail",
      field: "Email * ",
      fieldId: "email",
      fieldName: "email",
      fieldType: "email",
      placeHolder: "Eg: john@gmail.com",
      labelFor: "email",
      val: formValues.email,
    },
  ];

  return (
    <fieldset className="grid grid-cols-1 md:grid-cols-2 justify-between gap-y-4 md:gap-x-4">
      {userNameArr.map((item) => (
        <FormInput
          errId={item.errId}
          errMessage={item.errMessage}
          labelFor={item.labelFor}
          field={item.field}
          fieldId={item.fieldId}
          fieldName={item.fieldName}
          fieldType={item.fieldType}
          placeHolder={item.placeHolder}
          key={item.index}
          changeFn={changeFn}
          val={item.val}
          handleBlur={handleBlur}
        />
      ))}
    </fieldset>
  );
};

export default FormFields;
