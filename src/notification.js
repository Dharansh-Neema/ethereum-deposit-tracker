// src/notification.js
const axios = require("axios");
require("dotenv").config();

async function sendNotification(depositDetails) {
  const message = `
    New ETH Deposit Detected:
    - Block: ${depositDetails.blockNumber}
    - Timestamp: ${depositDetails.blockTimestamp}
    - Amount: ${depositDetails.fee} ETH
    - Transaction Hash: ${depositDetails.hash}
  `;

  try {
    await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
      }
    );
    console.log("Notification sent to Telegram");
  } catch (err) {
    console.error("Error sending Telegram notification:", err);
  }
}

module.exports = sendNotification;
