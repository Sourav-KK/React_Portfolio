import { Request, Response } from "express";
import formValidation from "./formValidation";

const contact_form = async (req: Request, res: Response) => {
  try {
    const response = await formValidation(req.body);
    console.log("response:", response);

    return res.status(200).json({});
  } catch (error) {
    console.error("eror in contact form:", error);
  }
};

export default contact_form;
