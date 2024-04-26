const express = require("express");
const porductRouter = express.Router();
const addCreateCategoryController = require("../../controllers/addCategoryController");
const addSubCategoryController = require("../../controllers/addSubCategoryController");
const viewCategoryController = require("../../controllers/viewCategoryController");
const viewSubCategoryController = require("../../controllers/viewSubCategoryController");

porductRouter.post("/createcategory", addCreateCategoryController);
porductRouter.post("/createsubcategory", addSubCategoryController);
porductRouter.get("/viewcategory", viewCategoryController);
porductRouter.get("/viewsubcategory", viewSubCategoryController);

module.exports = porductRouter;

// nam sttaus cate
