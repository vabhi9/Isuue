import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    price: {
      type: Number,
      required: true,
    },
    productDescription: {
      type: String,
    },
    category:{
      type: String,
      required: true,
      enum : ["Electronics", "Diary", "Util" , "Cat-4"]
    }
  }
  // {timestamps: true}
);

export const Product = mongoose.model("Product", productSchema);
