const mongodb = require('mongodb');
const assert = require('assert');
const config = require('../config').getConfig();
const MongoClient = mongodb.MongoClient;

let _db;
let _client;

function initDB(callback) {
    if (_db) {
        console.warn("Trying to init DB again!");
        return callback(null, _db);
    }

    const client = new MongoClient(config.dbString, { useNewUrlParser: true });
    client.connect(function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to mongodb server");
        _db = client.db(config.dbName);
        _client = client;

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

module.exports.objectId = mongodb.ObjectID;