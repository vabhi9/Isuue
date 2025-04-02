import express from "express";
// import productRouter from './routes/product.route.js'
import cors from "cors";
import productRouter from "./routes/product.route.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);



app.use((req, res, next) => {
  // res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  // res.setHeader("Cross-Origin-Embedder-Policy", "unsafe-none");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/product", productRouter);

export default app;
