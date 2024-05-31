import { TbRestore } from "@utils/React-icons";

const ResetButton = ({ action }: { action: () => void }) => {
  return (
    <div className="grid place-content-end">
      <button
        onClick={action}
        type="button"
        className=" btn btn-sm rounded-badge border-2 p-2"
        title="Reset form"
      >
        <TbRestore size={15} color="white" />
      </button>
    </div>
  );
};

export default ResetButton;
