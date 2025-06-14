// import { registerUser, loginUser } from "../services/auth.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const register_user = wrapAsync(async (req, res) => {
  res.send("Register");
});

export const login_user = wrapAsync(async (req, res) => {
  res.send("Login");
});
