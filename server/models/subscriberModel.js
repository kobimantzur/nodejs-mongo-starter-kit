import mongoose from "mongoose";

const Schema = mongoose.Schema;

const subscriberSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const subscribers = mongoose.model("subscriber", subscriberSchema);

module.exports = subscribers;
