const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

async function sendMail(email) {
  //////////////// GENERATING TOKEN
  jwt.sign({ email }, process.env.SECRET_REGISTER, async function (err, token) {
    if (err) {
      console.log(err.message);
    }
    console.log(token, email);
    ///////////// sending mail
    const transporter = nodemailer.createTransport({
      // host: "smtp.forwardemail.net",
      service: "gmail",
      // port: 465,
      // secure: true,
      auth: {
        user: "syeam45@gmail.com",
        pass: "zcrw wbup gslr mosq",
      },
    });
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"👻" syeam45@gmail.com', // sender address
      to: email, // list of receivers
      subject: "your otp", // Subject line
      // html: `your otp is : ${otp}`, // html body
      // token
      html: `<a href="http://localhost:5173/emailVerify/${token}">Click To Verify</a>`,
    });
  });
}

module.exports = sendMail;
