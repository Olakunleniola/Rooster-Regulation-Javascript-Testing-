const assert = require("assert");
const Rooster = require("../index.js");

describe("Rooster", () => {
    describe(".announceDawn", ()=> {
        it("returns a Rooster call", () => {
            const expected = "moo!"; 
            const result = Rooster.announceDawn();
            assert.ok(expected === result);
        });
    })
    describe(".atDawnTime", ()=> {
        it("returns its argument as a string", () => {
            const expected = "4"
            const result = Rooster.timeAtDawn(4);
            assert.strictEqual(expected, result);
        });
        
        it("throws an error if passed a number less than 0", () => {
           assert.throws(() => {Rooster.timeAtDawn(-1)}, RangeError);
        });
        
        it("throws an error if passed a number greater than 23", () => {
           assert.throws(() => {Rooster.timeAtDawn(24)}, RangeError);
        });
    })

    describe('Example Test', function () {
        it('should check if an error is thrown without verifying the message', function () {
          const functionThatThrows = () => {
            throw new Error('This is an error');
          };
      
          // Use assert.throws without specifying the error message
          assert.throws(functionThatThrows, Error, "ooprdddd");
        });
      });
})