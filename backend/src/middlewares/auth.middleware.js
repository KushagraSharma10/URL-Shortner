 import { verifyToken } from "../utils/helper.js";
import { UnauthorizedError } from "../utils/errorHandler.js";

export const authMiddleware = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return next(new UnauthorizedError("Unauthorized"));
  }
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return next(new UnauthorizedError("Unauthorized"));
  }
};
