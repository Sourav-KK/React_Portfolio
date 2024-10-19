const Label_Err = ({
  labelFor,
  field,
  errId,
  errMessage,
}: //   isError,
{
  labelFor: string;
  field: string;
  errId: string;
  errMessage: string;
  //   isError: string;
}) => {
  return (
    <div className="flex">
      <label htmlFor={labelFor} className="text-lg font-bold text-stone-500">
        {field}
      </label>
      <span className="text-red-400" id={errId}>
        {errMessage}
      </span>
    </div>
  );
};

export default Label_Err;
