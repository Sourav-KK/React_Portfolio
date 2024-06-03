import { NextFunction, Request, Response } from "express";

const Port_Error = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    console.error("Error in starting port");
    return res.status(401).json({ errMessage: "Internal server error" });
  } catch (error) {
    console.error("Error in starting port");
    return res
      .status(500)
      .json({ errMessage: "Technical error. Try after sometime." });
  }
};

export default Port_Error;
