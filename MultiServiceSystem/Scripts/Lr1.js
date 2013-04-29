function lr_1_drowChart(values) {
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

    buildChart(canvas, lr_1_fillBars(bars, values), lr_1_getYvalues(), 10, 4);
}

function lr_1_fillBars(bars, values) {
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

function lr_1_getYvalues() {
    var values = [];
    var x = 0;
    while (x < 0.25) {
        values[values.length] = x.toFixed(3);;
        x += 0.025;
    }
    return values;
}