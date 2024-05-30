import Is_empty from "./Is_empty";
import { formDataI, errMessageI } from "../Utilites/Interfaces";

const formValidation = async (data: formDataI) => {
  try {
    console.log("data:", data);

    let errMessage: errMessageI[] = [];
    let isEmpty: boolean = false;
    let statusCode: number = 0;

    const validation:
      | {
          errMessage: errMessageI[];
          statusCode: number;
        }
      | false = await Is_empty(data, isEmpty, errMessage, statusCode);

      if (validation) {
            
      }
  } catch (error) {
    console.error("eror in form validation:", error);
  }
};

export default formValidation;
