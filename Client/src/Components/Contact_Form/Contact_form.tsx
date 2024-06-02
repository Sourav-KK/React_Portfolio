import Form from "./Form";

const Contact_form = () => {
  return (
    <div className="flex p-20" id="contactSection">
      <div className="collapse bg-base-200 collapse-plus">
        <input type="checkbox" className="peer" />
        <div className="collapse-title uppercase font-bold font-mono text-4xl text-center bg-gray-50 peer-checked:bg-slate-100 peer-checked:text-stone-800 text-stone-700 border-2 border-stone-200">
          Contact
        </div>
        <div className="collapse-content bg-bg-slate-100 text-primary-content peer-checked:bg-slate-100 peer-checked:text-secondary-content border p-2 ">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact_form;
