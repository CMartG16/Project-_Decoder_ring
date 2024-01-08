// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar.js");
describe("caesar()", () => {
    it("should return false if the shift value is equal to 0.", () => {
        let mssg = "hgfgcfn"
        let shift = 0
        const actual=caesar(mssg, 0) 
        const expected= false
        expect(actual).to.eql(expected)
    });

    it("should return false if the shift value is less than -25.", () => {
        let mmsg = "hgjfg"
        let shift = -26
        const actual = caesar(mmsg, -26)
        const expected = false
        expect(actual).to.eql(expected);
    });

    it("should return false if shift value is greater than 25.", () => {
        let mssg = "jofdfj"
        let shift = 26
        const actual = caesar(mssg, 26)
        const expected = false
        expect(actual).to.eql(expected)
    });

    it("should ignore capital letters.", () => {
        let mssg = "HGFGH"
        let shift = 1
        const actual = caesar(mssg, 1) 
        const expected= "ihghi"
        expect(actual).to.eql(expected);

    });

    it("should handle shifts that go past the end of the alphabet.", () => {
        const input ="You guessed it!";
        const expected = "brx jxhvvhg lw!";
        const actual = caesar(input, 3);
        expect(actual).to.eql(expected);
    });
   
    it("should maintain spaces and other nonalphabetic symbols in the message when encoding.", () => {
        const mssg = "a message.";
        const shift = 3;
        const actual = caesar(mssg, 3);
        const expected = "d phvvdjh.";
        expect(actual).to.eql(expected)
      console.log(expected)
    });

    it("should maintain spaces and other nonalphabetic symbols in the message when decoding.", () => {
        const message = "a message";
        const shift = -3;
        const actual = caesar(message, 3, false);
        const expected = "x jbppxdb";
        expect(actual).to.eql(expected)
    })
});
