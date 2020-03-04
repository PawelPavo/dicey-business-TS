"use strict";
var randomColor = "rgb(" + randomVal(0, 255) + ", " + randomVal(0, 255) + ", " + randomVal(0, 255) + ")";
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var diceArray = [];
var container = document.getElementById('die-container');
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.value = 0;
        this.die = document.createElement('div');
        this.render();
        diceArray.push(this);
        this.die.addEventListener('click', function () { return _this.reRoll(); });
        this.die.addEventListener('dblclick', function () { return _this.destroy(); });
    }
    Die.prototype.render = function () {
        this.die.classList.add('roll');
        this.die.style.backgroundColor = randomColor;
        this.value = document.createTextNode("" + randomVal(1, 7));
        this.die.appendChild(this.value);
        container.appendChild(this.die);
    };
    Die.prototype.reRoll = function () {
        this.value = document.createTextNode("" + randomVal(1, 7));
        this.die.replaceChild(this.value, this.die.childNodes[0]);
    };
    Die.prototype.destroy = function () {
        this.die.remove();
        var i = diceArray.indexOf(this);
        diceArray.splice(i, 1);
    };
    return Die;
}());
;
var rollAll = document.getElementById('re-roll-btn');
rollAll.addEventListener('click', function () { return diceArray.forEach(function (oneDie) { return oneDie.reRoll(); }); });
var newRoll = document.getElementById('generate-die-btn');
newRoll.addEventListener('click', insertDie);
function insertDie() {
    var newDie = new Die();
}
var sumDice = document.getElementById('sum-die-btn');
sumDice.addEventListener('click', function () {
    var sum = 0;
    diceArray.forEach(function (oneDie) { return sum += Number(oneDie.value.data); });
    alert(sum);
});
