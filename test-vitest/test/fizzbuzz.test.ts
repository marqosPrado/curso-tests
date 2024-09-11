import { describe, it, assert } from "vitest";
import FizzBuzz from "../src/FizzBuzz";

describe('fizzBuzz Kata', () => {
    it('should return Fizz when input it is a multiple of three', () => {
        const input = 3;
        const result: string = FizzBuzz.execute(input);
        assert.equal("Fizz", result);
    })

    it('should return Buzz when input it is a multiple of five', () => {
        const input = 5;
        const result: string = FizzBuzz.execute(input);
        assert.equal("Buzz", result);
    })

    it('should return FizzBuzz when input it is a multiple of three and five', () => {
        const input: number = -15;
        const result: string = FizzBuzz.execute(input);
        assert.equal("FizzBuzz", result);
    })
})