import {} from "react-error-boundary";

const Fallback = () => {
  return (
    <div className="h-full w-full p-48">
      <div className="flex">
        <h1>Cannnot find page</h1>
      </div>
    </div>
  );
};

export default Fallback;
