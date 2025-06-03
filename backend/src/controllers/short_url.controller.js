import { createShortUrlService } from "../services/short_url.service.js";
import { generateNanoId } from "../utils/helper.js";

export const createShortUrl = async (req, res) => {
  const { url } = req.body;

  const short_url = createShortUrlService(url);
    if (!short_url) {
        return res.status(500).json({ error: "Failed to create short URL" });
    }
    res.status(201).send(process.env.APP_URL + short_url);
};
