import { asyncHandler } from "../utils/asyncHandler.js";
// import { ApiError } from "../utils/ApiError.js";
// import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

// const registerUser = asyncHandler(async (req, res) => {
//   // Fetching product data directly from MongoDB

//   const { name, email, picture, sub } = req.body;

//   console.log("Request.Body is:", req.body);
//   try {
//     // Check if user already exists
//     let existingUser = await User.findOne({ email });
//     if (!existingUser) {
//       const newUser = new User({
//         name,
//         email,
//         picture,
//         auth0Id: sub,
//         createdAt: new Date(),
//         lastLogin: new Date().toISOString(),
//         provider: "auth0",
//       });
//       await newUser.save();
//     } else {
//       // Optional: Update login time on repeated logins
//       existingUser.lastLogin = new Date().toISOString();
//       await newuser.save();
//     }

//     res.status(200).json({ message: "User saved/updated in DB" });
//   } catch (error) {
//     console.error("MongoDB Save Error:", error);
//     res.status(500).json({ message: "Internal Server Error Occurring" });
//   }
// });

// export { registerUser };
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, picture, auth0Id } = req.body;

  console.log("Request.Body is:", req.body);

  try {
    let existingUser = await User.findOne({ email });

    if (!existingUser) {
      const newUser = new User({
        name,
        email,
        picture,
        auth0Id,
        createdAt: new Date(),
        lastLogin: new Date().toISOString(),
        provider: "auth0",
      });
      console.log("Auth0 Id is Exists as: ", auth0Id)
      await newUser.save();
    } else {
      existingUser.lastLogin = new Date().toISOString();
      await existingUser.save(); // 🔥 Correct this line!
    }

    res.status(200).json({ message: "User saved/updated in DB" });
  } catch (error) {
    console.error("MongoDB Save Error:", error);
    res.status(500).json({ message: "Internal Server Error Occurring" });
  }
});

export { registerUser };
