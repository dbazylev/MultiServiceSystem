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
    drowChart(randomValues);
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

function drowChart(values) {
    var canvas = document.getElementById("canvas");
    var bars = [];
    bars[0] = new Bar(0, 0);
    bars[1] = new Bar(0, 0.1);
    bars[2] = new Bar(0, 0.2);
    bars[3] = new Bar(0, 0.3);
    bars[4] = new Bar(0, 0.4);
    bars[5] = new Bar(0, 0.5);
    bars[6] = new Bar(0, 0.6);
    bars[7] = new Bar(0, 0.7);
    bars[8] = new Bar(0, 0.8);
    bars[9] = new Bar(0, 0.9);
    
    buildChart(canvas, fillBars(bars, values));
}

function fillBars(bars, values) {
    for (var i = 0; i < values.length; i++) {
        var j = 0;
        var categoryIndex=-1;
        while (j < bars.length-1) {
            if (bars[j].label < values[i] && bars[j + 1].label > values[i]) {
                categoryIndex = j;
                break;
            }
            j++;
        }
        
        if(categoryIndex==-1) {
            categoryIndex = bars.length-1;
        }

        bars[categoryIndex].value++;
    }

    for (var i = 0; i<bars.length; i++) {
        bars[i].value = (bars[i].value / values.length) /0.025;
    }
    return bars;
}


function findMaxElement(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {

        }
    }
}