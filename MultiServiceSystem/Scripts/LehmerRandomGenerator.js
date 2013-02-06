function LehmerRandomGenerator(a, c, m, initValue) {
    this.a = a;
    this.c = c;
    this.m = m;
    this.previousValue = initValue;
    this.GetRandom=function()
    {
        this.previousValue = (this.a * this.previousValue + this.c) % this.m;
        return this.previousValue / this.m;
    }
}

