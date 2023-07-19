import assert from "assert";
import regCheck from "../regCheck.js";
describe("Car Registration Check", function(){
    // from gauteng
    it("Car From Gauteng: ", function(){
        assert.equal(regCheck("RG 45 HN GP", "GP"), true)
    });

    it("Car not from Gauteng", function(){
        assert.equal(regCheck("LKG 679 EC", "GP"), false)
    });

    // from Eastern cape


    it("Car not from Eastern cape", function(){
        assert.equal(regCheck("GHT 456 MP", "EC"), false)
    });

    // from Mpumalanga
    it("Car From Mpumalanga: ", function(){
        assert.equal(regCheck("GHT 456 MP", "MP"), true)
    });



    // from Limpopo
    it("Car From Limpopo: ", function(){
        assert.equal(regCheck("FGT 491 L", "L"), true)
    });


});