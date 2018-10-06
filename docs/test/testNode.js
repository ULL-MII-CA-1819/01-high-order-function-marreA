
// Utilizado para nodejs
const flat = require("../../flattening.js");
const loop = require("../../loop.js");
const every = require("../../everything.js");
const script = require("../../scripts.js");
const dominant = require("../../dominant.js");
const assert = require('assert');
var expect = require('chai').expect;

describe('Chapter 5 - High Order Functions', () => {
    describe('Flattening', () => {
        it('Flat returns [1, 2, 3] with "[[1], [2], [3]]"', () => {
            expect(flat([[1], [2], [3]])).to.deep.equal([1, 2, 3]);
        });

        it('Flat returns [1, 2, 3, 4, 5, 6] with "[[1, 2], [3], [4, 5, 6]]"', () => {
            assert.deepEqual(flat([[1, 2], [3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
        });
    });

    describe('Loop', () => {
        it('Value is [1] after loop with "[1, 2, 3, 4]"', () => {
            let values = [1, 2, 3, 4];
            loop(values, values => values.length >= 1, values => values = values.slice(0, values.length - 1), values => console.log(values[values.length - 1]));
            assert.deepEqual(values, [1, 2, 3, 4]);

        });
        it("Value is '4321' after loop with '[1, 2, 3, 4]'", () => {
            let values = [1, 2, 3, 4];
            let result = [];
            loop(values, values => values.length >= 1, values => values = values.slice(0, values.length - 1), values => result += (values[values.length - 1]));
            assert.deepEqual(result, '4321');
        });
    });

    describe('Every', () => {
        it('Every returns true with [5, 6, 7, 8, 9, 10]', () => {
            let array = [5, 6, 7, 8, 9, 10];
            assert.equal(every(array, (element) => element > 2), true);
        });
        it('Every returns false with [1, 6, 7, 8, 9, 10]', () => {
            let array = [1, 6, 7, 8, 9, 10];
            assert.equal(every(array, (element) => element > 2), false);
        });
        it('Every returns true with "[1, 3, 5]"', () => {
            let array = [1, 3, 5];
            assert.equal(every(array, (element) => element < 10), true);
        });
        it('Every returns false with "[2, 4, 16]"', () => {
            let array = [2, 4, 16];
            assert.equal(every(array, (element) => element < 10), false);
        });
        it('Every returns true with "[]"', () => {
            let array = [];
            assert.equal(every(array, (element) => element < 10), true);
        });
    });
    describe('Dominant', () => {
        it('Dominant returns ltr with "Hello!"', () => {
          assert.equal(dominantDirection("Hello!"), 'ltr');
        });
        it('Dominant returns rtl with "Hey, مساء الخير"', () => {
          assert.equal(dominantDirection("Hey, مساء الخير"), 'rtl');
        });
        it('Dominant returns ltr with "Hey, مساء الخير, acabo de escribir en otro idioma"', () => {
          assert.equal(dominantDirection("Hey, مساء الخير, acabo de escribir en otro idioma"), 'ltr');
        });
        it('Dominant returns rtl with "من تەمەنم سی و سێ ساڵە"', () => {
          assert.equal(dominantDirection("من تەمەنم سی و سێ ساڵە"), 'rtl');
        });
    });
});

//console.log(every([1, 3, 5], n => n < 10));
//console.log(every([2, 4, 16], n => n < 10));
//console.log(every([], n => n < 10));
