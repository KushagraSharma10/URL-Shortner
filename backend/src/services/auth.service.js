import { createUser, findUserByEmail, findUserById } from "../dao/user.dao.js";
import { signToken, verifyToken } from "../utils/helper.js";

export const registerUser = async (name, email, password) => {
  const user = await findUserByEmail(email);
  if (user) {
    throw new Error("User already exists");
  }
  const newUser = await createUser(name, email, password);
  const token = signToken({ id: newUser._id });
  return token;
};

export const loginUser = async (email, password) => {
  const user = await findUserByEmail(email);

  if (!user || user.password !== password) {
    throw new Error("Invalid credentials");
  }

  const token = signToken({ id: user._id });
  return token;
};
