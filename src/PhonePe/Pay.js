import app from "../app.js";
import dotenv from "dotenv";
import cors from "cors";
import { randomUUID } from "crypto";
import {
  StandardCheckoutClient,
  Env,
  StandardCheckoutPayRequest,
} from "pg-sdk-node";

dotenv.config({
  path: "./.env",
});

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const clientVersion = 1;
const env = Env.SANDBOX; //Replace SANDBOX with PRODUCTION when push the project Live

const client = StandardCheckoutClient.getInstance(
  clientID,
  clientSecret,
  clientVersion,
  env
);

app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;
    if (!amount) {
      return res.status(400).send("Amount is Required");
    }

    const merchantOrderId = randomUUID();
    const redirectURL = `http://localhost:5173/api/v1/product/`;

    const request = StandardCheckoutPayRequest.builder()
      .merchantOrderId(merchantOrderId)
      .amount(amount)
      .redirectUrl(redirectURL)
      .build();

    const response = await client.pay(request);

    return res.json({
      checkoutPageUrl: response.redirectUrl,
    });
  } catch (error) {
    console.log("Error Occurring While Creating Order" + error);
    res.status(500).send("Error Creating Order");
  }
});

app.get("/check-status", async (req, res) => {
  try {
    const { merchantOrderId } = req.query;

    if (!merchantOrderId) {
      return res.status(400).send("Merchant ID is Required");
    }

    const response = await client.getOrderStatus(merchantOrderId);
    const status = response.state;
    if (status === "COMPLETED") {
      return res.redirect("any URL that You Wanna Redirect User");
    } else {
      return res.redirect("Failed URL of Frontend")
    }
  } catch (error) {
    console.error("An Error Occurring During Creating Order" + error);
    res.status(500).send("Error Getting Status");
  }
});
