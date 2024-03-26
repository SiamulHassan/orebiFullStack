const User = require("../model/userModel");
// syeam45@gmail.com
const otpController = async (req, res) => {
  const { email, otp } = req.body;
  let findUser = await User.findOne({ email });
  if (!findUser.emailVerified && findUser.otp === otp) {
    const dta = await User.findOneAndUpdate(
      { email },
      { otp: "", emailVerified: true },
      { new: true }
    );
    // console.log("dsdf:", dta);
    res.status(200).json({
      status: "success",
      data: dta,
    });
  } else {
    res.send("mile nai");
  }
};
module.exports = otpController;
