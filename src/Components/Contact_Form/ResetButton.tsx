import { TbRestore } from "../../Utils/React-icons";

const ResetButton = ({ handleReset }: { handleReset: () => void }) => {
  return (
    <div className="grid place-content-end">
      <button
        type="button"
        onClick={handleReset}
        className=" btn btn-sm rounded-badge border-2 p-2"
        title="Reset form"
      >
        <TbRestore size={15} color="white" />
      </button>
    </div>
  );
};

export default ResetButton;
