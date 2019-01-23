const foods = require('./routes/foods');

exports.index = (req, res) => {
    res.render('index', { pageTitle: 'Home', message: 'Hello there!' });
}

exports.summary = (req, res) => {
    res.render('summary', {});
}

exports.foods = foods;