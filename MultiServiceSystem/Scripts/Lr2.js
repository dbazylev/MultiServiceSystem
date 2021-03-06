﻿function customDistribution(randomValues) {
    uniformDistribution(randomValues);
    exponentialDistribution(randomValues);
    simpsonDistribution(randomValues);
    gammaDistribution(randomValues);
}


// Гамма распределение
function gammaDistribution(randomValues) {
    var gammaArray = [];
    for (var i = 0; i < randomValues.length; i++) {
        gammaArray[i] = -1 * (1 / 5) * Math.log(randomValues[i]);

    }
    printArray(gammaArray, 'outPutGamma');
    drowGammaDistributuins(gammaArray);
}

// Равномерное распределение
function uniformDistribution(randomValues) {
    var uniformArray = [];
    for (var i = 0; i < randomValues.length; i++) {
        uniformArray[i] = 0.5+(0.8-0.5)*randomValues[i];
       
    }
    printArray(uniformArray, 'outPutUniform');
    drowUniformDistributuins(uniformArray);
}

//экспоненциального распределения
function exponentialDistribution(randomValues) {
    var expArray = [];
    for (var i = 0; i < randomValues.length; i++) {
        expArray[i] = -1 * (1 / 5) * Math.log(randomValues[i]);
    }
    printArray(expArray, 'outPutExp');
    drowExponentialDistributuins(expArray);
}

// распределения Симпсона
function simpsonDistribution(randomValues) {
    var simpsonArray = [];
    for (var i = 0; i < randomValues.length/2; i++) {
        simpsonArray[i] = randomValues[i] + randomValues[randomValues.length - i-1];
    }
    printArray(simpsonArray, 'outPutSimpson');
    drowSimpsonDistribution(simpsonArray);
}

function drowGammaDistributuins(values) {
    var canvas = document.getElementById("gammaDistributionCanvas");

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

    buildChart(canvas, lr_1_fillBars(bars, values), getYvalues(0.41));
}


function drowSimpsonDistribution(values) {
    var canvas = document.getElementById("simpsonDistributionCanvas");

    var bars = [];
    bars[0] = new Bar(0, 0);
    bars[1] = new Bar(0, 0.2);
    bars[2] = new Bar(0, 0.4);
    bars[3] = new Bar(0, 0.6);
    bars[4] = new Bar(0, 0.8);
    bars[5] = new Bar(0, 1.0);
    bars[6] = new Bar(0, 1.2);
    bars[7] = new Bar(0, 1.4);
    bars[8] = new Bar(0, 1.6);
    bars[9] = new Bar(0, 1.8);

    buildChart(canvas, lr_1_fillBars(bars, values), getYvalues());
}


function drowExponentialDistributuins(values) {
    var canvas = document.getElementById("exponentialDistributionCanvas");

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

    buildChart(canvas, lr_1_fillBars(bars, values), getYvalues(0.41));
}


function drowUniformDistributuins(values) {
    var canvas = document.getElementById("uniformDistributionCanvas");

    var bars = [];
    bars[0] = new Bar(0, 0.5);
    bars[1] = new Bar(0, 0.53);
    bars[2] = new Bar(0, 0.56);
    bars[3] = new Bar(0, 0.59);
    bars[4] = new Bar(0, 0.62);
    bars[5] = new Bar(0, 0.65);
    bars[6] = new Bar(0, 0.68);
    bars[7] = new Bar(0, 0.71);
    bars[8] = new Bar(0, 0.74);
    bars[9] = new Bar(0, 0.77);

    buildChart(canvas, fillUniformBars(bars, values), getYvalues());
}

function fillUniformBars(bars, values) {
    for (var i = 0; i < values.length; i++) {
        var j = 0;
        var categoryIndex = -1;
        while (j < bars.length - 1) {
            if (bars[j].label < values[i] && bars[j + 1].label > values[i]) {
                categoryIndex = j;
                break;
            }
            j++;
        }

        if (categoryIndex == -1) {
            categoryIndex = bars.length - 1;
        }

        bars[categoryIndex].value++;
    }

    for (var i = 0; i < bars.length; i++) {
        bars[i].value = (bars[i].value / values.length) / 0.025;
    }
    return bars;
}

function printArray(array, id) {
    var output = document.getElementById(id);
    output.value = "";
    for (var i = 0; i < array.length; i++) {
        output.value += array[i] + "\n";
    }
}


