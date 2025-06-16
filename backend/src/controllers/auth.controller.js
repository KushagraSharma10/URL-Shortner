// import { registerUser, loginUser } from "../services/auth.service.js";
import { cookieOptions } from "../config/config.js";
import { registerUser, loginUser } from "../services/auth.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const register_user = wrapAsync(async (req, res) => {
  const {name, email, password}  = req.body;
  const token  = await registerUser(name, email, password);
  if (!token) {
    return res.status(500).json({ error: "Failed to register user" });
  }
  res.cookie("accessToken", token, cookieOptions);
  res.status(200).json({message:"User registered successfully"});
});

export const login_user = wrapAsync(async (req, res) => {
  const { email, password } = req.body;
  const token = await loginUser(email, password);
  if (!token) return res.status(401).json({ error: "Invalid credentials" });
  
  res.cookie("accessToken", token, cookieOptions);
  res.status(200).json({message:"User logged in successfully"});
});
