import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Product } from "../models/product.model.js";

const registerProduct = asyncHandler(async (req, res) => {
  // Fetching product data directly from MongoDB

  let products = await Product.find(); // Fetch all products

  if (!products || products.length === 0) {
    throw new ApiError(404, "No products found");
  }
  console.log("Fetched Products: ", products);
  await Product.updateMany({}, { $unset: { category: 1 } });

  return res
    .status(200)
    .json(new ApiResponse(200, "Products Fetched Successfully", products));
  // .data(new ApiResponse(200, "Products Fetched Successfully", ))
});

const dynamicFilter = asyncHandler(async (req, res) => {
  try {
    console.log("API Hit");
    console.log("Params are:", req.params);

    const { category } = req.params;
    console.log(category);

    const products = await Product.find({ category }); // Dynamic filter
    console.log("Products Found:", products);
    console.log("Extracted Category:", category, "Type:", typeof category);
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export { registerProduct, dynamicFilter };
