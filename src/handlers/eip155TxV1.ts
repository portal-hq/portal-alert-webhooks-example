import { Eip155TransactionData } from "@/types/webhook";
import { Request, Response } from "express";

export async function handleEIP155TxV1(req: Request, res: Response) {
  // @IMPORTANT: Acknowledge webhook immediately.
  res.status(204).send();

  const transactions: Eip155TransactionData[] = req?.body?.data || [];
  for (const tx of transactions) {
    try {
      // Log transaction details
      console.log(`Received ${tx.direction} transaction on ${tx.chainName}`);

      // Handle different transaction types
      if (tx.direction === "INBOUND") {
        await handleInbound(tx);
      } else {
        await handleOutbound(tx);
      }
    } catch (error) {
      console.error(`Error processing transaction:`, error);
      // Continue processing other transactions even if one fails
    }
  }
}

async function handleInbound(tx: Eip155TransactionData) {
  // Implement your inbound transaction logic here
  // For example:
  // - Update user balances
  // - Send notifications
  // - Update database records
  // - Trigger downstream processes
}

async function handleOutbound(tx: Eip155TransactionData) {
  // Implement your outbound transaction logic here
  // For example:
  // - Update user balances
  // - Send notifications
  // - Update database records
  // - Trigger downstream processes
}
