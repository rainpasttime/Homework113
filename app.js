"use strict";
describe("spec",function(){
    it("spec one smaller than 8Km waiting 5 minutes",function(){
        const main = require('./main/main');
        let inputs = {running:"3",waiting:"5"};
        let result = main(inputs);
        expect(result).toEqual(8);
    });

    it("spec two bigger than 9Km waiting 15 minutes",function(){
        const main = require('./main/main');
        let inputs = {running:"9",waiting:"15"};
        let result = main(inputs);
        expect(result).toEqual(16);
    });

    it("spec three smaller than 8Km waiting 0 minutes",function(){
        const main = require('./main/main');
        let inputs = {running:"2",waiting:"0"};
        let result = main(inputs);
        expect(result).toEqual(6);
    });

    it("spec four bigger than 9Km waiting 0 minutes",function(){
        const main = require('./main/main');
        let inputs = {running:"15",waiting:"0"};
        let result = main(inputs);
        expect(result).toEqual(22);
    });

    it("spec five smaller than 2Km waiting 15 minutes",function(){
        const main = require('./main/main');
        let inputs = {running:"1",waiting:"15"};
        let result = main(inputs);
        expect(result).toEqual(9);
    });

    it("spec six smaller than 2Km waiting 0 minutes",function(){
        const main = require('./main/main');
        let inputs = {running:"1",waiting:"0"};
        let result = main(inputs);
        expect(result).toEqual(6);
    });
});