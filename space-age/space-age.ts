type planets = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';

const earthYears: { [planet in planets]: number } = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
};

class SpaceAge {

    constructor(public readonly seconds: number) { }

    private getPlanetAge(earthYears: number): number {
        return parseFloat((this.seconds / (31557600 * earthYears)).toFixed(2));
    }

    onMercury(): number {
        return this.getPlanetAge(earthYears.mercury);
    }
    onVenus(): number {
        return this.getPlanetAge(earthYears.venus);
    }
    onEarth(): number {
        return this.getPlanetAge(earthYears.earth);
    }
    onMars(): number {
        return this.getPlanetAge(earthYears.mars);
    }
    onJupiter(): number {
        return this.getPlanetAge(earthYears.jupiter);
    }
    onSaturn(): number {
        return this.getPlanetAge(earthYears.saturn);
    }
    onUranus(): number {
        return this.getPlanetAge(earthYears.uranus);
    }
    onNeptune(): number {
        return this.getPlanetAge(earthYears.neptune);
    }
}

export default SpaceAge;