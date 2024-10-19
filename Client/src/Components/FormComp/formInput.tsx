import Label_Err from "./Label_Err";

const FormInput = ({
  errId,
  errMessage,
  labelFor,
  field,
  fieldName,
  fieldId,
  placeHolder,
  fieldType,
  changeFn,
  val,
  handleBlur
}: {
  errId: string;
  errMessage: string;
  labelFor: string;
  field: string;
  fieldName: string;
  fieldId: string;
  placeHolder: string;
  fieldType: string;
  changeFn: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  val: string;
  handleBlur: () => Promise<void>
}) => {
  return (
    <div className="grid">
      <Label_Err
        errId={errId}
        errMessage={errMessage}
        field={field}
        labelFor={labelFor}
        // isError={errMessage}
      />
      <input
        name={fieldName}
        id={fieldId}
        placeholder={placeHolder}
        type={fieldType}
        className="bg-transparent border-2 border-stone-500 p-2 rounded-md"
        value={val}
        onChange={changeFn}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default FormInput;
