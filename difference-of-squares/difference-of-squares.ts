export default class Squares {
    constructor(private readonly n: number) { }

    get squareOfSum(): number {
        // Forumla for sum of first n terms in a Arithmetic progression
        return ((this.n * (this.n + 1)) / 2) ** 2;
    }

    get sumOfSquares(): number {
        // https://trans4mind.com/personal_development/mathematics/series/sumNaturalSquares.htm
        return (this.n * (this.n + 1) * ((2 * this.n) + 1)) / 6;
    }

    get difference(): number {
        return this.squareOfSum - this.sumOfSquares;
    }
}