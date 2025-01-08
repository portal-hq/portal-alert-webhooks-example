import { Request, Response, NextFunction } from "express";
import { ALLOWED_IPS } from "@/config/constants";

export const verifyIP = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const clientIP = req.ip || "";

  if (!ALLOWED_IPS.includes(clientIP)) {
    console.log("Unauthorized IP:", clientIP);
    res.status(403).json({
      error: "Forbidden: Request not from authorized IP address",
    });
    return;
  }

  next();
};
