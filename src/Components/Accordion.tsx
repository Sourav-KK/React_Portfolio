import { useFormik } from "formik";

interface formDataI {
  first_name: string;
  last_name: string;
  phone_no: string;
  email: string;
  subject: string;
  message: string;
}

const initialVal: formDataI = {
  first_name: "",
  last_name: "",
  phone_no: "",
  email: "",
  subject: "",
  message: "",
};

const validate = (values: formDataI) => {
  const errors = {
    first_name: "",
    last_name: "",
    phone_no: "",
    email: "",
    subject: "",
    message: "",
  };

  const regXName = /^[A-Za-z]+$/;
  const regXSentence = /^[\w\s,.*@()?'"/%^&!]+$/;
  const regXPhone = /^(0|[1-9]\d*)$/;

  // First name
  if (!values.first_name) {
    errors.first_name = "Required";
  }
  if (values.first_name.length > 15) {
    errors.first_name = "Must be 15 characters or less";
  }
  if (values.first_name.length < 3) {
    errors.first_name = "Must have minimum 3 characters ";
  }
  if (!values.first_name.match(regXName)) {
    errors.first_name = "Should contain only alphabets";
  }

  // Last name
  if (!values.last_name) {
    errors.last_name = "Required";
  }
  if (values.last_name.length > 20) {
    errors.last_name = "Must be 20 characters or less";
  }
  if (values.last_name.length < 3) {
    errors.last_name = "Must have minimum 3 characters ";
  }
  if (!values.last_name.match(regXName)) {
    errors.last_name = "Should contain only alphabets";
  }

  //   Subject
  if (!values.subject) {
    errors.subject = "Required";
  }
  if (values.subject.length > 40) {
    errors.subject = "Must be 40 characters or less";
  }
  if (values.subject.length < 10) {
    errors.subject = "Must have minimum 10 characters";
  }
  if (!values.subject.match(regXSentence)) {
    errors.subject = "Should contain only alphabets";
  }

  //   Message
  if (!values.message) {
    errors.message = "Required";
  }
  if (values.message.length > 500) {
    errors.message = "Too lengthy";
  }
  if (values.message.length < 20) {
    errors.message = "Must have minimum 20 characters ";
  }
  if (!values.message.match(regXSentence)) {
    errors.message = "Should contain only alphabets";
  }

  //   phone number
  console.log("phone:", values.phone_no);
  console.log("typew phone:", typeof values.phone_no);
  if (values.phone_no.length > 10) {
    errors.phone_no = "Must have 10 digits";
  }

  if (values.phone_no.length < 10) {
    errors.phone_no = "Must have 10 digits";
  }
  if (values.phone_no.match(regXPhone)) {
    errors.phone_no = "Must contain only numbers";
  }
  //   Email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Accordion = () => {
  const formik = useFormik({
    initialValues: initialVal,
    validate,
    onSubmit(values, formikHelpers) {
      const formData = JSON.stringify(values);
    },
  });

  return (
    <div className="flex p-20">
      <div className="collapse bg-base-200 collapse-plus">
        <input type="checkbox" className="peer" />
        <div className="collapse-title uppercase font-bold font-mono text-4xl text-center bg-slate-200  peer-checked:bg-slate-100 peer-checked:text-stone-800 text-stone-800">
          Contact
        </div>
        <div className="collapse-content bg-bg-slate-100 text-primary-content peer-checked:bg-slate-100 peer-checked:text-secondary-content border p-2 ">
          <form
            action=""
            className="grid grid-cols-1 p-4 gap-y-2"
            onSubmit={formik.handleSubmit}
          >
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
                  className="bg-transparent border-2 border-stone-400 rounded-md w-full max-h-36 min-h-36 p-2"
                  wrap="hard"
                  maxLength={700}
                  minLength={100}
                  {...formik.getFieldProps("message")}
                />
              </div>
            </div>
            <div className="flex p-4 justify-center align-middle">
              <button
                type="submit"
                className="btn btn-md md:btn-wide sm:btn-sm md:btn-md lg:btn-lg bg-transparent text-stone-800 hover:text-white "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
