import Contact_Form from "../Utils/Contact_Form";

const Collapse = () => {
  return (
    <div className="collapse collapse-arrow border bg-white">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
            <h1 className="flex text-center">Contact</h1>
             </div>
      <div className="collapse-content">
        {/* <p>hello</p> */}
        <>
          <Contact_Form />
        </>
      </div>
    </div>
  );
};

export default Collapse;
