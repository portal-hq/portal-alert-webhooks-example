# Portal Alert Webhooks Example

This repository contains an example implementation of Portal's alert webhooks using TypeScript and Express.js. It demonstrates best practices for handling alert webhook events, including security measures and proper event processing.

## Features

- 🔒 IP address verification
- 🔑 Webhook secret validation
- ⚡ Async event processing

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portal-alert-webhooks-example.git
   cd portal-alert-webhooks-example
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment file and set your variables:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run start
   ```

5. Test the webhook by making the following curl request:

```bash
   `curl --request POST \
  --url http://localhost:3001/webhook/events \
  --header 'Content-Type: application/json' \
  --header 'X-WEBHOOK-SECRET: your_alert_webhook_secret_here' \
  --data '{
  "data": [
    {
      "amount": "0.01",
      "assetType": "NATIVE_TOKEN",
      "chainId": "eip155:11155111",
      "chainName": "sepolia",
      "direction": "INBOUND",
      "from": "0xdfd8302f44727a6348f702ff7b594f127de3a902",
      "to": "0xd66a7df2e6081e347bffb30ed1f4a03014b1f847",
      "tokenSymbol": "ETH",
      "metadata": {
        "approvalSpender": null,
        "blockNumber": "7319953",
        "confirmed": true,
        "fee": {
          "amount": "0.000167770484721",
          "decimals": 18,
          "rawAmount": "167770484721000",
          "tokenSymbol": "ETH"
        },
        "nftTokenId": null,
        "rawAmount": "10000000000000000",
        "sentAt": "2024-12-20T19:25:24.000Z",
        "tokenAddress": null,
        "tokenDecimals": 18,
        "tokenName": "ETH",
        "transactionHash": "0xfca020f709ef8117f3d332c6644db38a41d1e6b47c729167c2c0cc5b05199141",
        "triggeredBy": "0xd66a7df2e6081e347bffb30ed1f4a03014b1f847",
        "userOperationHash": null
      }
    }
  ],
  "metadata": {
    "custodianId": "testCustodianId",
    "environmentId": "testEnvironmentId"
  },
  "type": "EIP_155_TX_V1"
}'
```

## Configuration

The following environment variables are required:

- `ALERT_WEBHOOK_SECRET`: Your Portal alert webhook secret (you can find it in the Portal Admin Dashboard after configuring an alert webhook)
- `PORT`: Server port (default: 3001)

## Directory Structure

- `src/`: Source code
  - `config/`: Configuration files
  - `handlers/`: Event handlers
  - `middleware/`: Express middleware
  - `routes/`: Express routes
  - `types/`: TypeScript type definitions

## Security

This implementation includes a couple of security measures:

1. IP address verification for Portal's known IPs
2. Alert webhook secret validation

## License

[MIT License](LICENSE)
