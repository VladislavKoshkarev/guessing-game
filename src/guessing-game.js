class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        const minimum = this.min
        const maximum = this.max
        return Math.round((minimum + maximum) / 2)
    }

    lower() {
        this.max = this.guess()
    }

    greater() {
        this.min = this.guess()
    }
}


module.exports = GuessingGame;
