const Message_comp = ({
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
    <div className="grid grid-cols-1 p-2 w-full">
      <div className="grid grid-cols-1 w-full ">
        <div className="">
          {{ errName } && (
            <p className="text-red-500 font-mono font-semibold pl-2 pb-2">
              {errName}
            </p>
          )}
        </div>
        <textarea
          id="message"
          placeholder="MESSAGE *"
          className="bg-white border-2 border-stone-400 rounded-md w-full max-h-36 min-h-36 p-2 "
          wrap="hard"
          maxLength={700}
          minLength={100}
          name="message"
          onChange={handleChange}
          value={val}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default Message_comp;
