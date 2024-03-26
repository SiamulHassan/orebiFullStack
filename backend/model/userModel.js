const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["Admin", "Merchant", "User"],
    default: "User",
  },
  otp: {
    type: String,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
