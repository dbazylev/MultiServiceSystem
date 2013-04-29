function executeRandomGenerator() {
    var a = collectValue("input_a");
    var c = collectValue("input_c");
    var m = collectValue("input_m");
    var x = collectValue("input_x0");
    var n = collectValue("input_n");
    var generator = new LehmerRandomGenerator(a, c, m, x);
    var randomValues = [];
    for (var i = 0; i < n; i++) {
        randomValues[i] = generator.GetRandom();
    }
    
    printValues(randomValues);
    lr_1_drowChart(randomValues);
    printRandomNumbers(randomValues);
    customDistribution(randomValues);
}


function collectValue(id) {
    return document.getElementById(id).value;
}

function printValue(id, value) {
    document.getElementById(id).innerHTML = value;
}

function printRandomNumbers(array) {
    var output = document.getElementById("outPutArea");
    output.value = "";
    for (var i = 0; i < array.length; i++) {
        output.value += array[i] + "\n";
    }
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

function findMaxElement(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {

        }
    }
}

function getYvalues(max, step) {
    if (max == undefined) {
        max = 0.25;
    }
    if (step == undefined) {
        step = 0.025;
    }
    var values = [];
    var x = 0;
    while (x < max) {
        values[values.length] = x.toFixed(3);;
        x += step;
    }
    return values;
}