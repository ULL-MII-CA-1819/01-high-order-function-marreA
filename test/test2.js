
// Utilizado para nodejs
/*const flat = require("../flattening.js");
const loop = require("../loop.js");
const every = require("../everything.js");
const assert = require('assert');*/
var assert = chai.assert;
var expect = chai.expect;/*
var expect = require('chai').expect;
let assert = require('chai').assert;*/
describe('Chapter 5 - High Order Functions', () => {
    describe('Flattening', () => {
        it('Flat returns [1, 2, 3]', () => {
            expect(flat([[1], [2], [3]])).to.deep.equal([1, 2, 3]);
        });

        it('Flat returns [1, 2, 3, 4, 5, 6]', () => {
            chai.assert.deepEqual(flat([[1, 2], [3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
        });
    });

    describe('Loop', () => {
        it('Value is [1] after loop', () => {
            let values = [1, 2, 3, 4];
            loop(values, values => values.length >= 1, values => values = values.slice(0, values.length - 1), values => console.log(values[values.length - 1]));
            chai.assert.deepEqual(values, [1, 2, 3, 4]);
        });
        it("Value is '4321' after loop", () => {
            let values = [1, 2, 3, 4];
            let result = [];
            loop(values, values => values.length >= 1, values => values = values.slice(0, values.length - 1), values => result += (values[values.length - 1]));
            chai.assert.deepEqual(result, '4321');
        });
    });

    describe('Every', () => {
        it('Every returns true', () => {
            let array = [5, 6, 7, 8, 9, 10];
            chai.assert.equal(every(array, (element) => element > 2), true);
        });
        it('Every returns false', () => {
            let array = [1, 6, 7, 8, 9, 10];
            chai.assert.equal(every(array, (element) => element > 2), false);
        });
        it('Every returns false', () => {
            let array = [1, 3, 5];
            chai.assert.equal(every(array, (element) => element < 10), true);
        });
        it('Every returns false', () => {
            let array = [2, 4, 16];
            chai.assert.equal(every(array, (element) => element < 10), false);
        });
        it('Every returns false', () => {
            let array = [];
            chai.assert.equal(every(array, (element) => element < 10), true);
        });
    });
    describe('Dominant', () => {
        it('Dominant returns true', () => {
          chai.assert.equal(dominantDirection("Hello!"), 'ltr');
        });
        it('Dominant returns true', () => {
          chai.assert.equal(dominantDirection("Hello!"), 'ltr');
        });
    });
});


/*x = 42;
if(false)
     x =-1;

*/



//console.log(every([1, 3, 5], n => n < 10));
//console.log(every([2, 4, 16], n => n < 10));
//console.log(every([], n => n < 10));
