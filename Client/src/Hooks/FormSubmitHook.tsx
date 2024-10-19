import { newformDataI } from "@utils/interfaces";
import React, { useState } from "react";

const useFormSubmitHook = () => {
  const [submiting, setSubmiting] = useState<boolean>(false);
  const [submitErr, setSubmitErr] = useState<string>("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    formValues: newformDataI
  ) => {
    try {
      event.preventDefault();
      setSubmiting(true);

      const data = JSON.stringify(formValues);
      console.log("data:", data);
      const URL: string = "http://localhost:3001/contact";

      const response = await fetch(URL, {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("server response:", response);
      if (!response.ok) {
        console.log("server response not ok");
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("error in submting:", error);
      setSubmiting(false);
      setSubmitErr((error as Error).message);
    } finally {
      setSubmiting(false);
    }
    //     event.preventDefault();
  };

  return { handleSubmit, submiting, setSubmiting, submitErr };
};

export default useFormSubmitHook;
