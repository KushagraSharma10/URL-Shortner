import express from "express";
import { createShortUrl } from "../controllers/short_url.controller";
const router = express.Router();

router.post("/",createShortUrl);

export default router;
