export interface SigningRequest {
  method: string; // e.g. "eth_sendTransaction"
  params: string; // e.g. '{"from":"0xec445db8df2208dde9b5ad87e77b6a4d45855d4f","to":"0xdFd8302f44727A6348F702fF7B594f127dE3A902","value":"0x5af3107a4000"}'
}

export interface SignatureApprovalData {
  chainId: string; // e.g. "eip155:11155111"
  clientId: string;
  signingRequest: SigningRequest;
}

export interface Eip155TransactionFee {
  amount: string;
  decimals: number;
  rawAmount: string;
  tokenSymbol: string;
}

export interface Eip155TransactionMetadata {
  approvalSpender: string | null;
  blockNumber: string;
  confirmed: boolean;
  fee: Eip155TransactionFee;
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

export interface Eip155TransactionData {
  amount: string;
  assetType: string;
  chainId: string;
  chainName: string;
  direction: "INBOUND" | "OUTBOUND";
  from: string;
  to: string;
  tokenSymbol: string;
  metadata: Eip155TransactionMetadata;
}

export interface WebhookPayload {
  data: Eip155TransactionData[] | SignatureApprovalData;
  metadata: {
    custodianId: string;
    environmentId: string;
  };
  type: "EIP_155_TX_V1" | "PRE_SIGN_V1";
}
