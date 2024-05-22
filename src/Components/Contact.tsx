import { useState } from "react";
import { FaPlus } from "../Utils/React-icons";
import Contact_Form from "../Utils/Contact_Form";

const Contact = () => {
  const [open, setOpen] = useState<boolean>(false);

  const openComponent = () => {
    setOpen(!open);
  };

  return (
    <div className="p-20 space-y-2 bg-white">
      <div
        className="flex justify-center hover:cursor-pointer"
        onClick={openComponent}
      >
        <h2 className="flex font-mono text-3xl text-center font-semibold justify-center uppercase">
          Contact
        </h2>
        <div className="p-2">
          <FaPlus size={20} />
        </div>
      </div>
      {open && (
        <div className="flex w-full justify-center align-middle transition-opacity ease-linear duration-700 ">
          <Contact_Form />
        </div>
      )}
    </div>
  );
};

export default Contact;
