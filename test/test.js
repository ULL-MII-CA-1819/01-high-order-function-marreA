
// Cargamos el primer ejercicio
const flat = require("../flattening.js");
const loop = require("../loop.js");
const every = require("../everything.js");
const assert = require('assert');

describe('Chapter 5 - High Order Functions', () => {
    describe('Flattening', () => {
        it('Flat returns [1, 2, 3]', () => {
            assert.deepEqual(flat([[1], [2], [3]]), [1, 2, 3]);
        });
    });
});

/* describe('Chapter 5 - High Order Functions', () => {
    describe('Loop', () => {
        it('Value is [1] after loop', () => {
            let values = [1, 2, 3, 4];
            loop(values, values => values.length >= 1, values => values = values.slice(0, values.length - 1), values => console.log(values[values.length - 1]));
            assert.deepEqual(values, [1]);
        }); 
    });
}); */

describe('Chapter 5 - High Order Functions', () => {
    describe('Every', () => {
        it('Every returns true', () => {
            let array = [5, 6, 7, 8, 9, 10];
            assert.equal(every(array, (element) => element > 2), true);
        });
        it('Every returns false', () => {
            let array = [1, 6, 7, 8, 9, 10];
            assert.equal(every(array, (element) => element > 2), false);
        });
    });
});
