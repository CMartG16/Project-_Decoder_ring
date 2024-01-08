// Write your tests here!
const { polybius } = require("../src/polybius.js");
const { expect } = require("chai");

describe("polybius()", () => {
    it("should translate the letters i and j to 42 when encoding.", () => {
        const input = "Hi"
        const actual = polybius(input)
        const expected = "3142"
        expect(actual).to.eql(expected)
    });

    it("should translate 42 to (i/j) when decoding.", () => {
      const input = "4432423352125413";
        const expected = "th(i/j)nkful"
        const actual = polybius(input, false);
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters.", () => {
          const input = "Hello";
        const expected = "3151131343";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message while encoding.", () => {
        const input = "No Taco"
        const actual = polybius(input)
        const expected = "3343 44113143"
        expect(actual).to.eql(expected)
    });

    it("should maintain spaces in the message while decoding.", () => {
        const input = "3343 44113143"
        const actual = polybius(input, false)
        const expected = "no taco"
        expect(actual).to.eql(expected)
    });
})