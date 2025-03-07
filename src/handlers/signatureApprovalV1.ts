import { SignatureApprovalData, WebhookPayload } from "@/types/webhook";
import { Request, Response } from "express";

export async function handleSignatureApprovalV1(req: Request, res: Response) {
  const body: WebhookPayload = req?.body;
  const signatureApprovalData = body.data as SignatureApprovalData;

  const chainNamespace = signatureApprovalData.chainId.split(":")[0];
  switch (chainNamespace) {
    case "eip155": {
      // Handle EIP-155 transaction
      const signingRequest = signatureApprovalData.signingRequest;
      const method = signingRequest.method;
      const params = signingRequest.params;

      console.log(
        `Received EIP-155 signature approval with method ${method} and params ${params}`
      );
      break;
    }
    case "solana": {
      // Handle Solana transaction
      const signingRequest = signatureApprovalData.signingRequest;
      const method = signingRequest.method;
      const params = signingRequest.params;

      console.log(
        `Received Solana signature approval with method ${method} and params ${params}`
      );
      break;
    }
    case "tron": {
      // Handle Tron transaction
      const signingRequest = signatureApprovalData.signingRequest;
      const method = signingRequest.method;
      const params = signingRequest.params;

      console.log(
        `Received Tron signature approval with method ${method} and params ${params}`
      );
      break;
    }
    case "stellar": {
      // Handle Stellar transaction
      const signingRequest = signatureApprovalData.signingRequest;
      const method = signingRequest.method;
      const params = signingRequest.params;

      console.log(
        `Received Stellar signature approval with method ${method} and params ${params}`
      );
      break;
    }
    default: {
      console.log(`Received unknown chain namespace: ${chainNamespace}`);
      break;
    }
  }
}
