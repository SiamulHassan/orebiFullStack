const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const emailVerifyController = async (req, res) => {
  const { token } = req.body;
  let decoded = jwt.verify(token, process.env.SECRET_REGISTER);
  console.log("decoded email:", decoded);
  let findUser = await User.findOne({ email: decoded.email });
  if (!findUser.emailVerified) {
    await User.findOneAndUpdate(
      { email: decoded.email },
      { emailVerified: true }
    );
    res.status(200).json({
      status: "success",
      message: "Email was successfully verified",
    });
  } else {
    res.status(400).json({
      status: "faild",
      message: "Problelm with verifying email",
    });
  }
};
module.exports = emailVerifyController;
