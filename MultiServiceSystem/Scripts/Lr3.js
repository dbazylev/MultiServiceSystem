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

    for(var i=0; i<n; i++) {
        var randomValue = generator.GetRandom();
        printValueInMemo(randomOutput, randomValue);
        stateMachine = stateMachine.getNextState(randomValue);
        printValueInMemo(statesOutput, stateMachine.label);
    }
}