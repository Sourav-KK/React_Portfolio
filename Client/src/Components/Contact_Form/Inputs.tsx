const Inputs = ({
  err1,
  err2,
  val1,
  val2,
  fieldName1,
  fieldName2,
  placeHold1,
  placeHold2,
  type1,
  type2,
  handleChange,
  handleBlur,
}: {
  err1: string;
  err2: string;
  val1: string;
  val2: string;
  type1: string;
  type2: string;
  fieldName1: string;
  fieldName2: string;
  placeHold1: string;
  placeHold2: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleBlur: () => Promise<void>;
}) => {
  return (
    <div className="flex justify-between w-full p-2 gap-2 md:flex-row flex-col">
      <div className="grid grid-cols-1 w-full md:w-6/12 ">
        <div className="">
          {err1 && (
            <p className="text-red-500 font-mono font-semibold pl-2 pb-2">
              {err1}
            </p>
          )}
        </div>

        <input
          type={type1}
          id={fieldName1}
          name={fieldName1}
          placeholder={placeHold1}
          className="bg-white border-2 border-stone-400 rounded-md p-2 w-full"
          value={val1}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="grid grid-cols-1 w-full md:w-6/12 ">
        <div className="">
          {err2 && (
            <p className="text-red-500 font-mono font-semibold pl-2 pb-2">
              {err2}
            </p>
          )}
        </div>
        <input
          type={type2}
          id={fieldName2}
          name={fieldName2}
          placeholder={placeHold2}
          className="bg-white border-2 border-stone-400 rounded-md p-2 w-full"
          value={val2}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Inputs;
