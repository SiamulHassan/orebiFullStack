const Category = require("../model/categoryModel");

const viewCategoryController = async (req, res) => {
  let categories = await Category.find();
  res.status(200).json({
    status: "success",
    data: {
      CateData: {
        categories,
      },
    },
  });
};
module.exports = viewCategoryController;
