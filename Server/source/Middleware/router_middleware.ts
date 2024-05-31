import { NextFunction, Request, Response } from "express";

const router_middleware = async (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    next();
  } catch (error) {
    console.error("error in middleware:", error);
  }
};

export default router_middleware;
