import dotenv from "dotenv";

dotenv.config();

export const ALLOWED_IPS = [
  "35.203.150.117",
  "104.155.171.139",
  "35.185.20.23",
  '::ffff:127.0.0.1', // @WARNING: This is only for local development
];

export const ALERT_WEBHOOK_SECRET = process.env.ALERT_WEBHOOK_SECRET || "your_alert_webhook_secret_here";

export const PORT = process.env.PORT || 3001;
