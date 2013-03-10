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
    drowChart();

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

function drowChart() {
    var canvas = document.getElementById("canvas");
    var arr = [];
    arr[0] = new Bar(2, 0);
    arr[1] = new Bar(1, 0.1);
    arr[2] = new Bar(0, 0.2);
    arr[3] = new Bar(4, 0.3);
    arr[4] = new Bar(8, 0.4);
    arr[5] = new Bar(2, 0.5);
    arr[6] = new Bar(5, 0.6);
    arr[7] = new Bar(5, 0.7);
    arr[8] = new Bar(5, 0.8);
    arr[9] = new Bar(5, 0.9);
    buildChart(canvas, arr);
}

