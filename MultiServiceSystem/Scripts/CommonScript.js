function executeRandomGenerator() {
    var a = collectValue("input_a");
    var c = collectValue("input_c");
    var m = collectValue("input_m");
    var x = collectValue("input_x0");
    var generator = new LehmerRandomGenerator(a, c, m, x);
    var randomValues = [];
    var n=30;
    for (var i = 0; i < n; i++) {
        randomValues[i] = generator.GetRandom();
    }
    
    printValues(randomValues);
}


function collectValue(id) {
    return document.getElementById(id).value;
}

function printValue(id, value) {
    document.getElementById(id).innerHTML = value;
}

function printValues(array) {
    var expectedValueResult = expectedValue(array);
    printValue("out_expectedValue", expectedValueResult);
    var varianceResult = variance(array, expectedValueResult);
    printValue("out_variance", varianceResult);
    var deviation = standardDeviation(varianceResult);
    printValue("out_deviation", deviation);
    var verification = indirectVerification(array);
    printValue("out_verification", verification);
}

