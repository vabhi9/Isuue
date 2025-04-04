import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./routes/product.route.js";
dotenv.config({
  path: "./.env",
});

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: "GET,POST",
    credentials: true,
  })
);

app.use((req, res, next) => {
  console.log("Incoming Request:", req.method, req.url);
  next();
});


app.use((req, res, next) => {
  console.log("Request Origin:", req.headers.origin);
  // console.log("CORS Headers:", res.getHeaders());
  console.log("CORS Headers:", JSON.stringify(res.getHeaders(), null, 2));
  next();
});

// app.use((req, res, next) => {
// res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
// res.setHeader("Cross-Origin-Embedder-Policy", "unsafe-none");
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/product", productRouter);
// app.use("/api/v1/product", productRouter);

export default app;
