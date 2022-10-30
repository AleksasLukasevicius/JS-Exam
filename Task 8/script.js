/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {

    this.getNumbers = function () {
        this.firstNumber = +prompt('Enter first nubmer', 0);
        this.secondNumber = +prompt('Enter second nubmer', 0);
    };

    this.getSum = function () {
        return this.firstNumber + this.secondNumber;
    };

    this.getSubtraction = function () {
        return this.firstNumber - this.secondNumber;
    };

    this.getMultiplication = function () {
        return this.firstNumber * this.secondNumber;
    };

    this.getDivision = function () {
        return this.firstNumber / this.secondNumber;
    };
}

let calculator = new Calculator();

calculator.getNumbers();

console.info(`Sum = ${calculator.getSum()}`);
console.info(`Subtraction =  ${calculator.getSubtraction()}`);
console.info(`Multiplication = ${calculator.getMultiplication()}`);
console.info(`Division = ${calculator.getDivision()}`);