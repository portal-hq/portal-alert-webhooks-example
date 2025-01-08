import { Router } from "express";
import { verifyIP } from "@/middleware/verifyIP";
import { verifySecret } from "@/middleware/verifySecret";
import { handleEIP155TxV1 } from "@/handlers/eip155TxV1";

const router = Router();

router.post("/events", verifyIP, verifySecret, async (req, res) => {
  try {
    // @IMPORTANT: Acknowledge webhook immediately
    res.status(204).send();

    // Process webhook asynchronously
    const { data, metadata, type } = req.body;

    console.log(
      `Received ${type} alert webhook for Portal environment ${metadata.environmentId}`
    );

    if (type === "EIP_155_TX_V1") {
      await handleEIP155TxV1(data);
    }
  } catch (error) {
    // Log error but don't send to client since we already responded
    console.error("Error processing webhook:", error);
  }
});

export default router;
