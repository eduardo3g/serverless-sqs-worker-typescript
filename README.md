# AWS SQS Worker

Sample to spin up a SQS worker with Typescript and the Serverless Framework.

# 👨🏽‍🔧 Tech stack

- Amazon Web Services
- Amazon Simple Queue Service (SQS)
- Amazon API Gateway (REST API)
- Serverless Framework
- Node.js
- Typescript
- Webpack

# 🖥️ Features

- Proxy requests from API Gateway to SQS (low latency)
- Lambda worker to consume messages from SQS
- Batch process messages from SQS
- Handle partial batch failures
- Send message to dead-letter queue after one failed attempt
