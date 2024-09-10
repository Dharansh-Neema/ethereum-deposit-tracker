const mongoose = require("mongoose");

const depositSchema = new mongoose.Schema({
  blockNumber: {
    type: Number,
    required: true,
  },
  blockTimeStamp: {
    type: Number,
    required: true,
  },
  fee: {
    type: Number,
    required: false,
  },
  hash: {
    type: String,
    required: false,
  },
  pubkey: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("depositSchema", depositSchema);
