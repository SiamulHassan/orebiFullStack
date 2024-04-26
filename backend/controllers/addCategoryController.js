const Category = require("../model/categoryModel");
const addCreateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);
    // existing categ.
    const existingCateg = await Category.find({ name: name.toLowerCase() });
    if (existingCateg.length > 0) {
      throw new Error("category already exists");
    } else {
      await Category.create({
        name: name.toLowerCase(),
      });
      res.status(200).json({
        status: "success",
        mess: "category successfully created",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "faild",
      mess: error.message,
    });
  }
};
module.exports = addCreateCategory;
