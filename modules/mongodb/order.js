const mongodb = require('./index');

function getTestStr() {
    const db = mongodb.getDB();

    db.collection('orders', function (err, collection) {
        collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
        collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });

        collection.count(function (err, count) {
            if (err) throw err;
            console.log('Total Rows:' + count);
        });
    });
}

exports.getTest = getTestStr