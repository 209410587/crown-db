const Category_87 = require('../models/Category_87');

exports.getCategories = async (req, res) => {
  try {
    return await Category_87.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};
