const dbFoods = require('../modules/mongodb/foods');

exports.list = (req, res) => {
    dbFoods.getAllFoods((error, foods) => {
        res.render('foods/list', { pageTitle: 'Foods list', foods: foods });
    });
}


exports.edit = (req, res) => {


    res.render('foods/edit', {});
}
