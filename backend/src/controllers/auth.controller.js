// import { registerUser, loginUser } from "../services/auth.service.js";
import { registerUser } from "../services/auth.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const register_user = wrapAsync(async (req, res) => {
  const {name, email, password}  = req.body;
  const user = await registerUser(name, email, password);
  
  res.send("Register");
});

export const login_user = wrapAsync(async (req, res) => {
  res.send("Login");
});
