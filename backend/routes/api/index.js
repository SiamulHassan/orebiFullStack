const express = require("express");
const authRouter = require("./auth");
const apiRouter = express.Router();
const porductRouter = require("./productRoute");

apiRouter.use("/auth", authRouter);
apiRouter.use("/product", porductRouter);

module.exports = apiRouter;
