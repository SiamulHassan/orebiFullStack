const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const sendMail = require("../helpers/sendMail");
const registrationController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      throw new Error("Empty field is not acceptable");
    // Pa$$w0rd!
    // pass length >= 6
    if (password.length < 6) throw new Error("Password is too small");

    // if email exists
    const existingMail = await User.find({ email });
    if (existingMail.length > 0) {
      throw new Error("Email already exists");
    } else {
      // hashing password
      bcrypt.hash(password, 10, function (err, hash) {
        if (err) throw new Error("pass theke");
        // sending opt
        // const otp = otpGenerator.generate(6, {
        //   upperCaseAlphabets: false,
        //   specialChars: false,
        // });
        // sending mail and otp
        // sendMail(email, otp);
        /// sending email (emailLinkVerify)
        sendMail(email);
        const user = new User({
          name: name,
          email: email,
          password: hash,

          // otp: otp,
        });
        // saving to db
        user.save();
        // sending response to client
        res.status(200).json({
          name: user.name,
          email: user.email,
        });
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "faild",
      message: err.message,
    });
  }
};
module.exports = registrationController;
//  // hashing password
//  const passHash = bcrypt.hash(password, 10, function(err,hash){
//   return hash
// })
