export default class StringCalculator {
    static add(input: string): number {
        if (!input) return 0;

        if (this.endWithSeparator(input)) {
            throw new Error();
        }

        const numbers: number[] = input.split(/[\D+]/).map(num => parseInt(num, 10));

        const clearNumbers = this.clearNaNResult(numbers)
        return clearNumbers.reduce((sum, num) => sum + num, 0);
    }

    private static endWithSeparator(input): boolean {
        return /\D$/.test(input);
    }

    private static clearNaNResult(input: number[]): number[] {
        return input.filter(num => !isNaN(num));  // Use filter to remove NaN values
    }
}
