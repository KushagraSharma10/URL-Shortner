import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config("./.env");

import connectDB from "./src/config/mongo.config.js";
import short_url from "./src/routes/short_url.route.js";
import { redirectFromShortUrl } from "./src/controllers/short_url.controller.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/:id", redirectFromShortUrl);

app.use("/api/create", short_url);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
