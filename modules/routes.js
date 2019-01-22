const dbFoods = require('../modules/mongodb/foods');

exports.index = (req, res) => {
    res.render('index', { pageTitle: 'Home', message: 'Hello there!' });
}

exports.summary = (req, res) => {
    res.render('summary', {});
}

exports.foodsList = (req, res)=>{
    dbFoods.getAllFoods((error, foods)=>{
        res.render('foods/list', {pageTitle: 'Foods list', foods: foods});
    });
}