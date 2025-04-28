import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  auth0Id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
  provider: { type: String, default: "auth0" },
});

export const User = mongoose.model("User", userSchema);
