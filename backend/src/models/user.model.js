import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  Avatar: {
    type: String,
    required: false,
    default: function(){
        return getGravatarUrl(this.email);
    },
  },
});

function getGravatarUrl(email) {
  const hash = require("crypto")
    .createHash("md5")
    .update(email.trim().toLowerCase())
    .digest("hex");
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
}

const User = mongoose.model("User", UserSchema);

export default User;
