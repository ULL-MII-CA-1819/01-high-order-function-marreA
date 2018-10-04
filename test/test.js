
// Cargamos el primer ejercicio
const flat = require("../flattening.js");
const assert = require('assert');

describe('Chapter 5 - High Order Functions', () => {
    describe('Flattening', () => {
        it('Flat returns [1, 2, 3]', () => {
            assert.deepEqual(flat([[1], [2], [3]]), [1, 2, 3]);
        });
    });
});

