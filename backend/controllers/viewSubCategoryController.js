const SubCategory = require("../model/subCategoryModel");

const viewSubCategoryController = async (req, res) => {
  let subcategory = await SubCategory.find().populate("categoryId");
  res.status(200).json({
    status: "success",
    data: {
      subCateData: {
        subcategory,
      },
    },
  });
};
module.exports = viewSubCategoryController;
