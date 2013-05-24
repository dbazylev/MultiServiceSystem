function compareRelation(a, b) {
    if (a.chance < b.chance)
        return -1;
    if (a.chance > b.chance)
        return 1;
    return 0;
};

window.StateDescription = (
function() {
    var state = function(label) {
        this.label = label;
        this.relations = [];
        this.addRelation = function(nextState, chance) {
            this.relations.push({ state: nextState, chance: chance });
            this.relations.sort(compareRelation);
        };

        this.getNextState = function (randomValue) {
            var index = 0;
            var sum = this.relations[index].chance;
            while (true) {
                if (sum >= randomValue) {
                    return this.relations[index].state;
                }
                index++;
                if (this.relations[index].chance == undefined) {
                    return this.relations[index - 1].state;
                }
                sum += this.relations[index].chance;
            }
        };
    };
    return state;
}
)();

function initializeGraph(p1, p2) {

    var s_2000 = new window.StateDescription('2000');
    var s_2111 = new window.StateDescription('2111');
    var s_2010 = new window.StateDescription('2010');
    var s_2011 = new window.StateDescription('2011');
    var s_1000 = new window.StateDescription('1000');
    var s_1111 = new window.StateDescription('1111');
    var s_1010 = new window.StateDescription('1010');
    var s_1001 = new window.StateDescription('1001');
    var s_1011 = new window.StateDescription('1011');

    s_2000.addRelation(s_1000, 1);

    s_2111.addRelation(s_1111, p1 * p2);
    s_2111.addRelation(s_1010, (1-p1) *(1-p2));
    s_2111.addRelation(s_1011, p1*(1 - p2) + p2*(1 - p1));

    s_2010.addRelation(s_1000, 1 - p1);
    s_2010.addRelation(s_1010, p1);

    s_2011.addRelation(s_1010, p1 * (1 - p2));
    s_2011.addRelation(s_1001, (1 - p1) * p2);
    s_2011.addRelation(s_1011, p1 * p2);
    s_2011.addRelation(s_1000, (1-p1) * (1-p2));

    s_1000.addRelation(s_2010, 1);

    s_1111.addRelation(s_2111,  p1*p2+p1*(1-p2)+p2*(1-p1));
    s_1111.addRelation(s_2011, (1 - p1) * (1 - p2));

    s_1010.addRelation(s_2010, 1 - p1);
    s_1010.addRelation(s_2011, p1);

    s_1001.addRelation(s_2010, 1 - p2);
    s_1001.addRelation(s_2011, p2);

    s_1011.addRelation(s_2111, p1*p2);
    s_1011.addRelation(s_2111, (1-p1)*(1-p2));
    s_1011.addRelation(s_2111, (1 - p1) * p2 + (1 - p2) * p1);
    
    return s_2000;
    
}

