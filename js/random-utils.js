;(function () {

    var dumbRandom = {};

    function getRandomValue(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomNumber(value) {
        return Math.floor(Math.random() * value + 1)
    }

    dumbRandom.getRandomValue = getRandomValue;
    dumbRandom.getRandomNumber = getRandomNumber;

    window.dumbRandom = dumbRandom;
}());

