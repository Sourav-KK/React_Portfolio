import Submit_btn from "./Submit_btn";
import { useFormik } from "formik";
import { validateee, initialVal } from "./Form_Validation";
// import { useState } from "react";
import ResetButton from "./ResetButton";

const Form = () => {
  // const [submiting, setSubmiting] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: initialVal,
    validate: validateee,

    onSubmit: async (values, formikHelpers) => {
      console.log("values in onSubmit:", values);
      console.log("formikHelpers in onSubmit:", formikHelpers);
      // try {
      //   setSubmiting(true);

      //   const formData = JSON.stringify(values, null, 2);
      //   console.log("formData:", formData);

      //   resetForm();
      // } catch (error) {
      //   console.log("Error occured", error);
      //   setSubmiting(false);
      // } finally {
      //   console.log("finally occured");
      //   setSubmiting(false);
      // }
    },
  });

  // const handleSubmit = async (values: formDataI) => {
  //   console.log("in validate");
  //   try {
  //     setSubmiting(true);

  //     const formData = JSON.stringify(values);
  //     console.log("formData:", formData);
  //     const response = await fetch("https://localhost:3001/contact-form", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: formData,
  //     });
  //     console.log("response:", response);

  //     if (response.ok) {
  //       console.log("Form submitted successfully");
  //       // Handle successful submission here
  //     } else {
  //       console.error("Form submission failed");
  //       // Handle errors here
  //     }
  //   } catch (error) {
  //     console.error("error:", error);
  //   } finally {
  //     setSubmiting(false);
  //   }
  // };

  const handleReset = () => {
    formik.resetForm();
  };

  return (
    <>
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
              onChange={formik.handleChange}
              placeholder="First Name *"
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
              className="bg-white border-2 border-stone-400 rounded-md p-2 w-full"
              // {...formik.getFieldProps("first_name")}
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
              onChange={formik.handleChange}
              placeholder="Last Name *"
              className="bg-white border-2 border-stone-400 rounded-md p-2 w-full"
              // {...formik.getFieldProps("last_name")}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
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
              // {...formik.getFieldProps("email")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
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
              // {...formik.getFieldProps("phone_no")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone_no}
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
            onChange={formik.handleChange}
            // {...formik.getFieldProps("subject")}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
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
              // {...formik.getFieldProps("message")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
          </div>
        </div>
        <Submit_btn />
      </form>

      <ResetButton handleReset={handleReset} />
    </>
  );
};

export default Form;
