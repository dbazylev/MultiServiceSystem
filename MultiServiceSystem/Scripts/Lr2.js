function customDistribution(randomValues) {
   // printValue('lr2', 42);
    uniformDistribution(randomValues);
}


// Равномерное распределение
function uniformDistribution(randomValues) {
    var uniformArray = [];
    for (var i = 0; i < randomValues.length; i++) {
        //uniformArray[i] = 2*randomValues[i] - 1;
        uniformArray[i] = randomValues[i];
    }
    printArray(uniformArray, 'outPutUniform');
    drowUniformDistributuins(uniformArray);
}


function drowUniformDistributuins(values) {
    var canvas = document.getElementById("uniformDistributionCanvas");

    var bars = [];
    bars[0] = new Bar(0, 0);
    bars[1] = new Bar(0, 0.11);
    bars[2] = new Bar(0, 0.21);
    bars[3] = new Bar(0, 0.31);
    bars[4] = new Bar(0, 0.41);
    bars[5] = new Bar(0, 0.51);
    bars[6] = new Bar(0, 0.61);
    bars[7] = new Bar(0, 0.71);
    bars[8] = new Bar(0, 0.81);
    bars[9] = new Bar(0, 0.91);

    buildChart(canvas, fillUniformBars(bars, values));
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