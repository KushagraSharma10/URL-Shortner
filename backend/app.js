import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import short_url from "./src/routes/short_url.route.js";
import { redirectFromShortUrl } from "./src/controllers/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";

app.use(cors());
dotenv.config("./.env");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.get("/:id", redirectFromShortUrl);

app.use("/api/create", short_url);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
