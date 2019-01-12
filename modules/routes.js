exports.index = (req, res) => {
    res.render('index', { pageTitle: 'Home', message: 'Hello there!' });
}

exports.summary = (req, res) => {
    res.render('summary', {});
}