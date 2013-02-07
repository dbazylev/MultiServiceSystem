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



// Проверка по косвенному признаку
function indirectVerification(values) {
    var k = 0;
    for (var i = 0; i < values.length; i += 2) {
        if ((Math.pow(values[i], 2) + Math.pow(values[i + 1], 2)) < 1) {
            k++;
        }
    }
    return 2 * k / values.length;
}
