// Write your tests here!
const expect  = require("chai").expect; 
const {substitution} = require("../src/substitution.js");

describe("substitution", () => {
    it("should correctly translates the given phrase, based on the alphabet given to the function.", () => {  

        const input = "thinkful";
        const expected = "jrufscpw";
        const actual = substitution(input,"xoyqmcgrukswaflnthdjpzibev", true);
        expect(actual).to.equal(expected);
    });
  
    it("Should return false if the alphabet parameter is not exactly 26 characters.", () => {
        const input = "thinkful";
        const expected = false;
        const actual =substitution(input,"qoxoyqmcgrukswaflnthdjpzibe");
        expect(actual).to.equal(expected);
    });
  
    it("should have all the characters in the alphabet parameter be unique, otherwise return false ", () => {
        const input = "thinkful";
        const expected = false;
        const actual = substitution(input,"abcabcabcabcabcabcabcabcyz");
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message, before and after encoding.", () => {
        const input = "You are an excellent spy";
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(input,"xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
  
    it("should maintain spaces in the message, before and after decoding.", () => {
        const input = "elp xhm xf mbymwwmfj dne";
        const expected = "you are an excellent spy";
        const actual = substitution(input,"xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    });
  
    it("should ignore capital letters.", () => {
        const input = "You are an excellent spy";
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(input,"xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    
});
