export interface Fee {
  amount: string;
  decimals: number;
  rawAmount: string;
  tokenSymbol: string;
}

export interface TransactionMetadata {
  approvalSpender: string | null;
  blockNumber: string;
  confirmed: boolean;
  fee: Fee;
  nftTokenId: string | null;
  rawAmount: string;
  sentAt: string;
  tokenAddress: string | null;
  tokenDecimals: number;
  tokenName: string;
  transactionHash: string;
  triggeredBy: string;
  userOperationHash: string | null;
}

export interface TransactionData {
  amount: string;
  assetType: string;
  chainId: string;
  chainName: string;
  direction: "INBOUND" | "OUTBOUND";
  from: string;
  to: string;
  tokenSymbol: string;
  metadata: TransactionMetadata;
}

export interface WebhookPayload {
  data: TransactionData[];
  metadata: {
    custodianId: string;
    environmentId: string;
  };
  type: "EIP_155_TX_V1";
}
