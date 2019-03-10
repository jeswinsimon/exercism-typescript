export default class Squares {
    constructor(private readonly n: number) { }

    get squareOfSum(): number {
        let sum: number = 0;
        for (let i = 1; i <= this.n; i++) {
            sum += i;
        }

        return sum ** 2;
    }

    get sumOfSquares(): number {
        let sum: number = 0;
        for (let i = 1; i <= this.n; i++) {
            sum += (i ** 2);
        }

        return sum;
    }

    get difference(): number {
        return this.squareOfSum - this.sumOfSquares;
    }
}