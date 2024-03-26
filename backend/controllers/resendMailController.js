const sendMail = require("../helpers/sendMail");
const validateMail = require("../helpers/validateMail");
const User = require("../model/userModel");

const resendMailController = async (req, res) => {
  try {
    const { email } = req.body;
    console.log("yor mail:", email);
    if (!email) throw new Error("Please provide your email");
    const isValidMail = validateMail(email);
    if (isValidMail) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        // syeam45@gmail.com
        sendMail(email);
      } else {
        throw new Error("No user found with the provided email");
      }
    } else {
      throw new Error("Your email is not a valid email");
    }
  } catch (error) {
    res.status(400).json({
      status: "faild",
      message: error.message,
    });
  }
};

module.exports = resendMailController;
