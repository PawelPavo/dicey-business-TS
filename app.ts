let randomColor:any = `rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)})`

function randomVal(min:any, max:any) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let diceArray: Array<Die> = []

let container = <HTMLDivElement>document.getElementById('die-container');

class Die {
    public value: any = 0;
    public die: HTMLDivElement
    constructor() {
        this.die = document.createElement('div');
        this.render()
        diceArray.push(this)
        this.die.addEventListener('click', () => this.reRoll())
        this.die.addEventListener('dblclick', () => this.destroy())
    }
    public render():void {
        this.die.classList.add('roll');
        this.die.style.backgroundColor = randomColor;
        this.value = document.createTextNode(`${randomVal(1, 7)}`);
        this.die.appendChild(this.value);
        container.appendChild(this.die);
    }
    public reRoll():void {
        this.value = document.createTextNode(`${randomVal(1, 7)}`);
        this.die.replaceChild(this.value, this.die.childNodes[0])
    }
    public destroy():void {
        this.die.remove();
        let i = diceArray.indexOf(this);
        diceArray.splice(i, 1)
    }
};

let rollAll = <HTMLDivElement>document.getElementById('re-roll-btn');
rollAll.addEventListener('click', () => diceArray.forEach((oneDie) => oneDie.reRoll()))

let newRoll = <HTMLDivElement>document.getElementById('generate-die-btn');
newRoll.addEventListener('click', insertDie);

function insertDie():void {
    let newDie:any = new Die();
}

let sumDice = <HTMLDivElement>document.getElementById('sum-die-btn');
sumDice.addEventListener('click', function () {
    let sum: number = 0;
    diceArray.forEach(oneDie => sum += Number(oneDie.value.data));
    alert(sum);
})
