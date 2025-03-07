import { Request, Router } from "express";
import { verifyIP } from "@/middleware/verifyIP";
import { verifySecret } from "@/middleware/verifySecret";
import { handleEIP155TxV1 } from "@/handlers/eip155TxV1";
import { handleSignatureApprovalV1 } from "@/handlers/signatureApprovalV1";
import { WebhookPayload } from "@/types/webhook";

const router = Router();

router.post("/events", verifyIP, verifySecret, async (req, res) => {
  try {
    const { metadata, type } = req.body as WebhookPayload;

    console.log(
      `Received ${type} alert webhook for Portal environment ${
        metadata.environmentId
      } with request body:\n${JSON.stringify(req.body, null, 2)}`
    );

    switch (type) {
      case "EIP_155_TX_V1": {
        await handleEIP155TxV1(req, res);
        return;
      }
      case "PRE_SIGN_V1": {
        await handleSignatureApprovalV1(req, res);
        return;
      }
      default: {
        console.log(`Received unknown webhook type ${type}, skipping`);
        res.status(200).send();
        return;
      }
    }
  } catch (error) {
    // Log error but don't send to client since we already responded
    console.error("Error processing webhook:", error);
  }
});

export default router;
