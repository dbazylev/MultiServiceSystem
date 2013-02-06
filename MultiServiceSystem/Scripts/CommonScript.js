function executeRandomGenerator() {
    var a = collectValue("input_a");
    var c = collectValue("input_c");
    var m = collectValue("input_m");
    var generator = new LehmerRandomGenerator(a, c, m, 0);
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

function printValues(array) {
    alert('ok');
}