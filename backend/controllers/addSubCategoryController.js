const SubCategory = require("../model/subCategoryModel");
const addSubCategoryController = async (req, res) => {
  try {
    const { name, categoryId } = req.body;
    console.log(name);
    // existing categ.
    const existingCateg = await SubCategory.find({ name: name.toLowerCase() });
    if (existingCateg.length > 0) {
      throw new Error("sub category already exists");
    } else {
      await SubCategory.create({
        name: name.toLowerCase(),
        categoryId,
      });
      res.status(200).json({
        status: "success",
        mess: "sub category successfully created",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "faild",
      mess: error.message,
    });
  }
};
module.exports = addSubCategoryController;
