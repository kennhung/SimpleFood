const mongodb = require('mongodb');
const assert = require('assert');
const config = require('../config').getConfig();
const MongoClient = mongodb.MongoClient;

let _db;

function initDB(callback) {
    if (_db) {
        console.warn("Trying to init DB again!");
        return callback(null, _db);
    }

    const client = new MongoClient(config.dbString, { useNewUrlParser: true });
    client.connect(function (err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to mongodb server");
        _db = db.db(config.dbName);

        return callback(null, _db);
    });
}


/**
 * @returns {mongodb.Db}
 */
function getDB() {
    assert.notEqual(_db, "Db has not been initialized. Please called init first.");
    return _db;
}

module.exports = {
    getDB,
    initDB
};