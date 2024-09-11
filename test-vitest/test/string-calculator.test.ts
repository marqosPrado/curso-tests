import {describe, it, assert} from "vitest";
import StringCalculator from "../src/string-calculator/StringCalculator";

describe("String Calculator", () => {
    it("should return zero when input it is a empty string", () => {
        const input: string = "";
        const result: number = StringCalculator.add(input);
        assert.equal(result, 0);
    })

    it("should return the number itself when input has one number", () => {
        const input: string = "1";
        const result: number = StringCalculator.add(input);
        assert.equal(result, 1);
    })

    it("should return the sum when input has '1,2'", () => {
        const input: string = "1,2";
        const result: number = StringCalculator.add(input);
        assert.equal(result, 3);
    })

    it("should return the sum when input has '1,2,3,4,5'", () => {
        const input: string = "1,2,3,4,5";
        const result: number = StringCalculator.add(input);
        assert.equal(result, 15);
    })

    it("should return the sum when input has '1,2\n3'", () => {
        const input: string = "1,2\n3";
        const result: number = StringCalculator.add(input);
        assert.equal(result, 6);
    })

    it("should throw an error if has a separator in the end of input, like '1,2,'", () => {
        const input: string = "1,2,";
        assert.throw(() => {
            StringCalculator.add(input);
        });
    })

    it("should throw an error if has a separator in the end of input, like '1,2|'", () => {
        const input: string = "1,2|";
        assert.throw(() => {
            StringCalculator.add(input);
        });
    })

    it("should throw an error if has a separator in the end of input, like '1,2\n'", () => {
        const input: string = "1,2\n";
        assert.throw(() => {
            StringCalculator.add(input);
        });
    })

    it("should handle different delimiters, like '//;\\n1;3' ", () => {
        const input: string = "//;\\n1;3";
        const result: number = StringCalculator.add(input);
        assert.equal(result, 4);
    })

    it("should handle different delimiters, like '//sep\\n2sep5' ", () => {
        const input: string = "//sep\\n2sep5";
        const result: number = StringCalculator.add(input);
        assert.equal(result, 7);
    })
})