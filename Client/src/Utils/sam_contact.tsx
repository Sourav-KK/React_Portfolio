import { useFormik } from "formik";

import ResetButton from "@components/Contact_Form/ResetButton";
import { useState } from "react";
import {
  initialVal,
  validateee,
} from "@components/Contact_Form/Form_Validation";

const Contact_form = () => {
  const [submiting, setSubmiting] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: initialVal,
    validate: validateee,

    onSubmit: (values) => {
      handleSubmit(values);

      
    },
  });

  const handleSubmit = async () => {
    console.log("inside handlesubmit");
  };

  return (
    <div className="flex p-20" id="contactSection">
      <div className="collapse bg-base-200 collapse-plus">
        <input type="checkbox" className="peer" />
        <div className="collapse-title uppercase font-bold font-mono text-4xl text-center bg-slate-200  peer-checked:bg-slate-100 peer-checked:text-stone-800 text-stone-800">
          Contact
        </div>
        <div className="collapse-content bg-bg-slate-100 text-primary-content peer-checked:bg-slate-100 peer-checked:text-secondary-content border p-2 ">
          <form
            className="grid grid-cols-1 p-4 gap-y-2"
            onSubmit={formik.handleSubmit}
          >
            {/* first_name + last_name */}
            <div className="flex justify-between w-full p-2 gap-2 md:flex-row flex-col">
              <div className="grid grid-cols-1 w-full md:w-6/12 ">
                <div className="">
                  {formik.touched.first_name && formik.errors.first_name && (
                    <p className="text-red-500 font-mono font-semibold pl-2 pb-2">
                      {formik.errors.first_name}
                    </p>
                  )}
                </div>

                <input
                  type="text"
                  id="first_name"
                  placeholder="First Name *"
                  className="bg-white border-2 border-stone-400 rounded-md p-2 w-full"
                  {...formik.getFieldProps("first_name")}
                />
              </div>
              <div className="grid grid-cols-1 w-full md:w-6/12 ">
                <div className="">
                  {formik.touched.last_name && formik.errors.last_name && (
                    <p className="text-red-500 font-mono font-semibold pl-2 pb-2">
                      {formik.errors.last_name}
                    </p>
                  )}
                </div>
                <input
                  type="text"
                  id="last_name"
                  placeholder="Last Name *"
                  className="bg-white border-2 border-stone-400 rounded-md p-2 w-full"
                  {...formik.getFieldProps("last_name")}
                />
              </div>
            </div>

            {/* email + phone */}
            <div className="flex justify-between w-full p-2 gap-2 md:flex-row flex-col ">
              <div className="grid grid-cols-1 w-full md:w-6/12 ">
                <div className="">
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 font-mono font-semibold pl-2 pb-2">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email *"
                  className="bg-white border-2 border-stone-400 rounded-md p-2 w-full "
                  {...formik.getFieldProps("email")}
                />
              </div>
              <div className="grid grid-cols-1 w-full md:w-6/12 ">
                <div className="">
                  {formik.touched.phone_no && formik.errors.phone_no && (
                    <p className="text-red-500 font-mono font-semibold pl-2 pb-2">
                      {formik.errors.phone_no}
                    </p>
                  )}
                </div>
                <input
                  type="tel"
                  id="phone_no"
                  placeholder="PHONE"
                  className="bg-white border-2 border-stone-400 rounded-md p-2 w-full "
                  {...formik.getFieldProps("phone_no")}
                />
              </div>
            </div>

            {/* subject */}
            <div className="grid grid-cols-1  p-2 w-full">
              <div className="grid grid-cols-1 w-full  ">
                <div className="">
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="text-red-500 font-mono font-semibold pl-2 pb-2">
                      {formik.errors.subject}
                    </p>
                  )}
                </div>
              </div>
              <input
                type="text"
                className="bg-white border-2 border-stone-400 rounded-md p-2  w-full "
                id="subject"
                placeholder="Subject *"
                {...formik.getFieldProps("subject")}
              />
            </div>

            {/* Message */}
            <div className="grid grid-cols-1 p-2 w-full">
              <div className="grid grid-cols-1 w-full ">
                <div className="">
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 font-mono font-semibold pl-2 pb-2">
                      {formik.errors.message}
                    </p>
                  )}
                </div>
                <textarea
                  id="message"
                  placeholder="MESSAGE *"
                  className="bg-transparent border-2 border-stone-400 rounded-md w-full max-h-36 min-h-36 p-2 "
                  wrap="hard"
                  maxLength={700}
                  minLength={100}
                  {...formik.getFieldProps("message")}
                />
              </div>
            </div>
            <Submit_btn />
          </form>
          <ResetButton handleReset={handleReset} />
        </div>
      </div>
    </div>
  );
};

export default Contact_form;
