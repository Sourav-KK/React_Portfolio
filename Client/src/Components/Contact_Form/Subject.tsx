const Subject_comp = ({
  errName,
  val,
  handleChange,
  handleBlur,
}: {
  errName: string;
  val: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleBlur: () => Promise<void>;
}) => {
  return (
    <div className="grid grid-cols-1  p-2 w-full">
      <div className="grid grid-cols-1 w-full  ">
        <div className="">
          {errName && (
            <p className="text-red-500 font-mono font-semibold pl-2 pb-2">
              {errName}
            </p>
          )}
        </div>
      </div>
      <input
        type="text"
        className="bg-white border-2 border-stone-400 rounded-md p-2  w-full "
        id="subject"
        placeholder="Subject *"
        name="subject"
        onChange={handleChange}
        onBlur={handleBlur}
        value={val}
      />
    </div>
  );
};

export default Subject_comp;
