import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUser } from "../services/short_url.service.js";

import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {
  const { url } = req.body;

  const short_url = await createShortUrlWithoutUser(url);
  if (!short_url) {
    return res.status(500).json({ error: "Failed to create short URL" });
  }
  res.status(201).send(process.env.APP_URL + short_url);
});

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
  const { id } = req.params;
  const url = await getShortUrl(id);
  res.redirect(url.full_url);
  if (!url) {
    return res.status(404).json({ error: "Short URL not found" });
  }
});
