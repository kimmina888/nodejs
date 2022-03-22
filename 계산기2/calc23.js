var util = require('util');
const calc = require('../계산기/calc22');
var EventEmitter = require('events').EventEmitter;
var Calc = function() {
/* var self = this; */
    this.on('start',function(){
        console.log('Calc에 start event 전달됨.');
    });
    this.on('subtitle',function(title){
        console.log('계산기 이벤트 발생함 : %s',title);
    });
    this.on('stop', function() {
        console.log('Calc에 stop event 전달됨.');
    });
};
util.inherits(Calc, EventEmitter);
Calc.prototype.add = function(a, b) {
    return a + b;
}
Calc.prototype.substract = function(a, b) {
    return a - b;
}
Calc.prototype.multiply = function(a, b) {
    return a * b;
}
Calc.prototype.divide = function(a, b) {
    return a / b;
}
module.exports = Calc;
module.exports.title = 'calculator';