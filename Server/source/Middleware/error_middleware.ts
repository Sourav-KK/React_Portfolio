import { NextFunction, Request, Response } from "express";

const error_middleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("request in middleware:", req.headers["content-type"]);
    if (req.headers["content-type"] !== "application/json") {
      console.error("header is deifferent");
      return res.status(400).json({ errMessage: "Bad request" });
    }
    console.log("error middleware passed");
    next();
  } catch (error) {
    console.error("error in middleware:", error);
    return res.status(400).json({ errMessage: "Bad request" });
  }
};

export default error_middleware;
