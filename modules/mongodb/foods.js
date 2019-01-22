const mongodb = require('./index');

function getAllFoods(callback) {
    const db = mongodb.getDB();

    db.collection('foods', function (err, collection) {
        let foods = [];
        collection.find({}).forEach((doc) => {
            foods.push(doc);
        }, (error) => {
            callback(error, foods);
        });
    });
}

function getFoodFromId(targetId, callback) {
    const db = mongodb.getDB();
    const collection = db.collection('foods');

    collection.findOne({ _id: targetId }, (error, result) => {
        callback(error, result);
    });
}

function saveFoods(foods) {
    foods.forEach((item) => {
        saveFood(item);
    });
}

function saveFood(food) {
    const db = mongodb.getDB();

    db.collection('foods', (err, collection) => {
        collection.findOne({ _id: food._id }, (error, result) => {
            if (result == undefined) {
                collection.insertOne(food).catch((err) => {
                    console.error(err);
                });
            } else {
                collection.updateOne({ _id: food._id }, { $set: food }).catch((err) => {
                    console.error(err);
                });
            }
        });
    });
}

function deleteFood(food) {
    const db = mongodb.getDB();

    db.collection('foods', (err, collection) => {
        collection.findOneAndDelete({ _id: food._id }).catch((err) => {
            console.error(err);
        });
    });
}

module.exports = {
    saveFood,
    saveFoods,
    getAllFoods,
    getFoodFromId,
    deleteFood
}