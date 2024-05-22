import { useFormik } from "formik";
import * as Yup from "yup";

interface MyFormValues {
  first_name: string;
  last_name: string;
  email_id: string;
  message: string;
}

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required").min(3).max(10),
  last_name: Yup.string().required("First Name is required").min(3).max(10),
  email_id: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required").min(15).max(100),
});

const validator = (values: MyFormValues) => {
  const errors = {
    first_name: "",
    last_name: "",
    email_id: "",
    message: "",
  };
  if (!values.first_name) {
    errors.first_name = "Required";
  } else if (values.first_name.length > 15) {
    errors.first_name = "Must be 15 characters or less";
  }

  if (!values.last_name) {
    errors.last_name = "Required";
  } else if (values.last_name.length > 20) {
    errors.last_name = "Must be 20 characters or less";
  }

  if (!values.email_id) {
    errors.email_id = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email_id)
  ) {
    errors.email_id = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.message)
  ) {
    errors.message = "Invalid email address";
  }

  return errors;
};

const initialVal: MyFormValues = {
  first_name: "",
  last_name: "",
  email_id: "",
  phone_no: "",
  subject: "",
  message: "",
};

const Contact_Form = () => {
  const formik = useFormik({
    initialValues: initialVal,
    validate: validator,
    onSubmit: (values) => {
      console.log("inside onSubmit")
      const formDetails = JSON.stringify(values, null, 2);
      console.log("formDetails:", formDetails);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid w-full grid-cols-1 gap-y-8 p-20 bg-slate-100"
    >
      <div className="flex flex-col md:space-x-2 md:flex-row">
        <input
          type="text"
          id="first_name"
          name="first_name"
          placeholder="FIRST NAME *"
          onChange={formik.handleChange}
          value={formik.values.first_name}
          className="border-2 border-gray-800 text-gray-800 font-mono text-lg p-2 w-1/4 bg-white rounded-sm"
        />

        {formik.errors.first_name ? (
          <div>{formik.errors.first_name}</div>
        ) : null}
        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder="LAST NAME *"
          onChange={formik.handleChange}
          value={formik.values.last_name}
          className="border-2 border-gray-800 text-gray-800 font-mono text-lg p-2 w-1/3 bg-white rounded-sm"
        />
      </div>
      {formik.errors.last_name ? <div>{formik.errors.last_name}</div> : null}
      <div className="flex">
        <input
          type="email"
          id="email_id"
          name="email_id"
          placeholder="EMAIL *"
          onChange={formik.handleChange}
          value={formik.values.email_id}
          className="border-2 border-gray-800 text-gray-800 font-mono text-lg p-2 w-2/3 bg-white rounded-sm"
        />
        {formik.errors.email_id ? <div>{formik.errors.email_id}</div> : null}
      </div>

      {formik.errors.message ? <div>{formik.errors.message}</div> : null}
      <div className="flex">
        {/* <input
          type="text"
          id="message"
          name="message"
          placeholder="MESSAGE *"
          onChange={formik.handleChange}
          value={formik.values.message}
          className="border-2 border-gray-800 text-gray-800 font-mono text-lg p-2 w-full"
        /> */}
        <textarea
          name="message"
          id="message"
          placeholder="MESSAGE *"
          onChange={formik.handleChange}
          value={formik.values.message}
          minLength={20}
          maxLength={400}
          className="border-2 border-gray-800 w-full p-2 h-44 resize-none bg-white rounded-sm"
        />
      </div>
      <div className="flex justify-center align-middle">
        <button
          type="submit"
          className="border-2 border-gray-800 border-solid p-2 rounded-sm font-mono w-1/4 bg-white"
        >
          SEND IT
        </button>
      </div>
    </form>
  );
};

export default Contact_Form;
