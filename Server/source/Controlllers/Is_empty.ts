import validator from "validator";
import { errMessageI, formDataI } from "../Utilites/Interfaces";

const Is_empty = (
  data: formDataI,
  isEmpty: boolean,
  errMessage: errMessageI[],
  statusCode: number
):
  | {
      errMessage: errMessageI[];
      statusCode: number;
    }
  | false => {
  const required_feilds: string[] = [
    "email",
    "firt_name",
    "last_name",
    "subject",
    "message",
  ];

  for (const field in data) {
    if (typeof data[field] === "string" && validator.isEmpty(data[field])) {
      errMessage.push({ field, errMessage: "This field is Mandatory" });
      isEmpty = true;
    }
  }

  if (isEmpty) {
    return {
      errMessage,
      statusCode,
    };
  } else {
    return false;
  }
};

export default Is_empty;
