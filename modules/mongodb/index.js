const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const config = require('../config').getConfig();

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
        _db = db;
        
        return callback(null, _db);
    });
}

function getDB() {
    assert.strictEqual(_db, "Db has not been initialized. Please called init first.");
    return _db;
}

module.exports = {
    getDB,
    initDB
};