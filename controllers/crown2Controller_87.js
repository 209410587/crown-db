const serviceCrown2Controller_87 = require('./serviceCrown2Controller_87');

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_87.getCategories();
    // console.log('results', JSON.stringify(results));
    res.render('crown2_87', {
      data: results,
      title: 'Crown2_87',
      name: 'Kate Cheng',
      id: `209410587`,
    });
  } catch (err) {
    console.log('crown2Controller getCategories', err);
  }
};
