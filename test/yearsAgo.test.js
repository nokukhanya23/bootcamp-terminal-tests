import assert from "assert";
import yearsAgo from "../yearsAgo.js";
describe("Years Ago", function(){
    it("4 years", function(){
        assert.equal((new Date().getFullYear() - 2019), yearsAgo(2019));
    })

});