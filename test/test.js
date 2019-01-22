var assert = require('assert');
var MongoDB = require('../modules/mongodb/index');
var Foods = require('../modules/mongodb/foods');
describe('Test MongoDB', function () {

    before((done) => {
        MongoDB.initDB((err, db) => {
            done();
        });
    });

    it('check Connection', function () {
        assert.notEqual(MongoDB.getDB(), undefined);
    });

    describe('Test foods.js', (done) => {

        let food = { name: 'Food1', _id: MongoDB.objectId.createFromTime(new Date(1)) }

        it('test saveFood & getFoodFromId', () => {
            Foods.saveFood(food);

            Foods.getFoodFromId(food._id, (error, food) => {
                assert.notEqual(readFood, undefined);
                assert.equal(readFood.name, food.name);
            });
        });

        it('test delete food', () => {
            Foods.deleteFood(food);
            Foods.getFoodFromId(food._id, (error, food) => {
                assert.equal(readFood, undefined);
            });
        });
    });

});