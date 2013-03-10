var borderValue = 45;

function buildChart(canvas, valuesCollection) {
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = '#000000';

    var maxValue = 10;//barsMaxValue(valuesCollection);
    var barWidth = calculateBarWidth(canvas.width, valuesCollection.length);
    var barBaseHeight = calculateBarBaseHeight(canvas.height, maxValue);

    //[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    drowVerticalAxis(context, 0, canvas.height, barBaseHeight, getYvalues());
    
    for(var i=0; i<valuesCollection.length; i++) {
        drowBar(context,
            borderValue + i * barWidth,
            canvas.height - borderValue,
            barWidth,
            barBaseHeight * valuesCollection[i].value);
        drowLabel(context,
            valuesCollection[i].label,
            borderValue + i * barWidth,
            canvas.height - borderValue/2
        );
    }

    drowRedLine(context, borderValue, canvas.height - barBaseHeight*4 - borderValue, canvas.width);
}

function drowBar(context, x, y, width, height) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y - height);
    context.lineTo(x + width, y - height);
    context.lineTo(x + width, y);
    context.closePath();
    context.stroke();
}

function drowText(context, text, x, y) {
    context.fillText(text, x, y);
}

function drowLabel(contex, text, x, y) {
    drowText(contex, text, x, y);
}

function drowVerticalAxis(context, x, y, barBaseHeight, values) {
    values[values.length] = 'C(k)';
    context.beginPath();
    context.moveTo(x + borderValue, y - borderValue);
    context.lineTo(x + borderValue, y - values.length * barBaseHeight - borderValue);
    context.closePath();
    context.stroke();
    
    for (var i = 0; i < values.length; i++) {
        drowLabel(context, values[i], x + borderValue / 3, y - i * barBaseHeight - borderValue);
    }
    
}

function calculateBarWidth(canvasWidth, barCount) {
    return (canvasWidth - borderValue * 2) / barCount;
}

function calculateBarBaseHeight(canvasHeigth, maxValue) {
    return (canvasHeigth - borderValue *2) / maxValue;
}

function barsMaxValue(valuesCollection) {
    var maxValue = 0;
    for (var i=0; i<valuesCollection.length; i++) {
        if(valuesCollection[i].value>maxValue) {
            maxValue = valuesCollection[i].value;
        }
    }
    return maxValue;
}

function drowRedLine(context, x, y, length) 
{
    context.strokeStyle = "#ff0000";
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x+length, y);
    context.closePath();
    context.stroke();
    context.strokeStyle = "#000000";
}

function getYvalues() {
    var values = [];
    var x = 0;
    while (x<0.25) {
        values[values.length] = x.toFixed(3);;
        x += 0.025;
    }
    return values;
}

window.Bar=(function () {
    var bar = function(value, label) {
        this.value = value;
        this.label = label;
    };
    return bar;
})()