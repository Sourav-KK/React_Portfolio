import FormInput from "./formInput";

const Field_email = () => {
  const emailPhoneArr = [
    {
      errMessage: "errEmail",
      field: "Email *",
      fieldId: "email",
      fieldName: "email",
      fieldType: "email",
      placeHolder: "Eg: johndoe@gmail.com",
      labelFor: "email",
      index: 202,
    },
    {
      errMessage: "errEmail",
      labelFor: "phoneNo",
      field: "Phone No",
      fieldId: "phoneNo",
      fieldName: "phoneNo",
      fieldType: "tel",
      placeHolder: "Eg: 949835****",
      index: 202,
    },
  ];
  return (
    <fieldset className="grid grid-cols-1 md:grid-cols-2 justify-between gap-y-4 md:gap-x-4">
      {emailPhoneArr.map((item) => (
        <FormInput
          errMessage={item.errMessage}
          labelFor={item.labelFor}
          field={item.field}
          fieldId={item.fieldId}
          fieldName={item.fieldName}
          fieldType={item.fieldType}
          placeHolder={item.placeHolder}
          key={item.index}
        />
      ))}
    </fieldset>
  );
};

export default Field_email;
