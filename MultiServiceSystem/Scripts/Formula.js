// математическое ожидание
function expectedValue(values) {
    var sum=0;
    for (var i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum / values.length;
}

//дисперсия
function variance(values, expectedValue) {
    var sum = 0;
    for (var i = 0; i < values.length; i++) {
        sum += Math.pow(values[i] - expectedValue, 2);
    }
    return sum / values.length;
}

// среднеквадратичное откланение
function standardDeviation(variance) {
    return Math.sqrt(variance);
}