import { Request, Response, NextFunction } from "express";
import { ALERT_WEBHOOK_SECRET } from "@/config/constants";

export const verifySecret = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const alertWebhookSecret = req.headers["x-webhook-secret"];

  if (!alertWebhookSecret || alertWebhookSecret !== ALERT_WEBHOOK_SECRET) {
    console.log("Unauthorized webhook secret:", alertWebhookSecret, ALERT_WEBHOOK_SECRET);
    res.status(401).json({
      error: "Unauthorized: Invalid webhook secret",
    });
    return;
  }

  next();
};
