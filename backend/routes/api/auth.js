const express = require("express");
const authRouter = express.Router();
const registrationController = require("../../controllers/registrationController");
// const otpController = require("../../controllers/otpController");
const emailVerifyController = require("../../controllers/emailVerifyController");
const loginController = require("../../controllers/loginController");
authRouter.post("/registration", registrationController);
// authRouter.post("/otpVerification", otpController);
authRouter.post("/emailVerify", emailVerifyController);
authRouter.post("/login", loginController);

module.exports = authRouter;
