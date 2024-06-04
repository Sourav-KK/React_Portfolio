import validator from "validator";
import { formDataI } from "../Utilites/Interfaces";

interface errMessageI {
  field: string;
  message: string;
}

const isEmpty = (
  data: formDataI
): { errMessage: errMessageI[]; statusCode: number } | true => {
  const errMessages: errMessageI[] = [];
  let isEmpty = false;

  for (const field in data) {
    if (typeof data[field] === "string" && validator.isEmpty(data[field])) {
      errMessages.push({ field, message: "This field is mandatory" });
      isEmpty = true;
    }
  }

  if (isEmpty) {
    return {
      errMessage: errMessages,
      statusCode: 202,
    };
  } else {
    return true;
  }
};

export default isEmpty;
