export default class FizzBuzz {
    static execute(input: number): string {
        if (input % 5 === 0 && input % 3 === 0) {
            return "FizzBuzz";
        }
        if (input % 3 === 0) {
            return "Fizz";
        }
        if (input % 5 === 0) {
            return "Buzz";
        }
    }
}