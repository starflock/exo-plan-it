class Planet {
    constructor(probablyOfLife, similarRealPlanet) {
        this.probablyOfLife = probablyOfLife;
        this.similarRealPlanet = similarRealPlanet;
    }

    static generate(paramters) {
        // This is a fake calculation!
        const probablyOfLife = Math.max(paramters.distance/10000000, 1);

        return new Planet(probablyOfLife, "https://google.com/");
    }
}