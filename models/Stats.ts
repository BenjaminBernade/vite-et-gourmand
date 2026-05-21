import mongoose from "mongoose";

const StatsSchema = new mongoose.Schema({
  totalOrders: Number,
  totalRevenue: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Stats =
  mongoose.models.Stats || mongoose.model("Stats", StatsSchema);