# Ethereum Deposit Tracker

This project is an Ethereum Deposit Tracker built with Node.js, Web3, Mongoose, and Telegram Bot API. It tracks incoming ETH deposits to a specified Ethereum smart contract and notifies users via Telegram in real-time.

## Features

- Tracks Ethereum deposits made to a specified contract address.
- Stores deposit details (amount, sender address, block number, timestamp, etc.) in a MongoDB database.
- Sends real-time notifications via Telegram when a deposit is detected.

## Prerequisites

To run this project, you need the following installed on your machine:

- **Node.js** (v12.x or later)
- **MongoDB** (running locally or via a cloud service like MongoDB Atlas)
- **Infura** or **Alchemy** Ethereum node (for WebSocket connections)
- **Telegram Bot** (for notifications)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dharansh-Neema/ethereum-deposit-tracker.git
   cd ethereum-deposit-tracker
   ```
2. **Install dependencies: Make sure you're in the project root directory, then run:**
   `npm install`
3. **Create a .env file: Create a .env file in the project root and add the following environment**
4. **Create a .env file: Create a .env file in the project root and add the following environment variables:**

```
DB_URL=mongodb://127.0.0.1:27017/depositTracker
INFURA_URL=wss://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID
CONTRACT_ADDRESS=0x00000000219ab540356cBB839Cbe05303d7705Fa
TELEGRAM_API_KEY=YOUR_TELEGRAM_BOT_API_KEY
CHAT_ID=YOUR_TELEGRAM_CHAT_ID
```

5. **Run the application: Start the Ethereum deposit tracker with:**
   `node src/index.js`
