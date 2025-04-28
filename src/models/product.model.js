import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      // index: true,
    },
    price: {
      type: Number,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Customized Hampers", "Electronics", "Diary", "Util", "Cat-4"],
    },
    CartItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  }
  // {timestamps: true}
);

export const Product = mongoose.model("Product", productSchema);
