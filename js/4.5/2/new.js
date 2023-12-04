function Accumulator(startingValue) {
    this.startingValue = 1,
    this.value = this.startingValue
    this.read = function() {
        this.value += +prompt('Сколько прибавить?','5') 
}
}
let accumulator = new Accumulator(startingValue);
accumulator.read();
accumulator.read();
alert(accumulator.value)