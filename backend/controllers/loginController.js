const User = require("../model/userModel");
const bcrypt = require("bcrypt");
//syeam45@gmail.com
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const loginUser = await User.findOne({ email });
    console.log("loginuser:", loginUser);
    // user not found
    if (loginUser.length < 0) throw new Error("User does not exist");
    // match password
    bcrypt.compare(password, loginUser.password, function (err, result) {
      if (err) throw new Error("Error in passwroid");
      if (result) {
        res.status(200).json({
          status: "success",
          result: result,
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = loginController;
