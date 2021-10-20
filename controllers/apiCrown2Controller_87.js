const serviceCrown2Controller_87 = require('./serviceCrown2Controller_87');

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_87.getCategories();
    return res.json(data);
  } catch (err) {
    console.log('crown2Controller getCategories', err);
  }
};
