var refusing = 0;
var iterations = 0;

function executeStateMachine() {
    var n = parseInt(collectValue('input_n'));
    var p1 = parseFloat(collectValue('input_p1'));
    var p2 = parseFloat(collectValue('input_p2'));

    var stateMachine = initializeGraph(p1, p2);

    var statesOutput = document.getElementById("outPutStates");
    var randomOutput = document.getElementById("outPutRandom");
    clearMemo(statesOutput);
    clearMemo(randomOutput);

    printValueInMemo(statesOutput, stateMachine.label);

    var generator = new LehmerRandomGenerator(22695477, 1, 4294967296, 300);
    refusing = 0;
    iterations = 0;
    for(var i=0; i<n; i++) {
        var randomValue = generator.GetRandom();
        printValueInMemo(randomOutput, randomValue);
        var previous = stateMachine.label;
        stateMachine = stateMachine.getNextState(randomValue);
        printValueInMemo(statesOutput, stateMachine.label);
        calculateDenial(previous, stateMachine.label, generator.GetRandom(), p1, p2);
    }
}

function calculateDenial(previouseState, currentState, randomValue, p1, p2) {
    iterations++;
    if ((previouseState == '2111') && (currentState == '1111')) {
        if (randomValue < p1 * p2) {
            refusing++;
        }
    }
    printValue('out_p_ref', (refusing / iterations) * 100);
}