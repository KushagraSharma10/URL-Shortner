import urlSchema from '../models/shorturl.model.js';


export const saveShortUrl = async (shortUrl, longUrl, userId) => {
    const newUrl = new urlSchema({
        full_url: longUrl,
        short_url: shortUrl,
      });
    if (userId) {
        newUrl.user_id = userId;
    }
      newUrl.save();
    return newUrl;
}

export const getShortUrl = async (shortUrl) => {
    return await urlSchema.findOneAndUpdate({ short_url: shortUrl }, {$inc: { clicks: 1 }}, { new: true });
}