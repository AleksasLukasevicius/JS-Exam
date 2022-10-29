/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {

    this.getNumbers = function () {
        this.firstNumber = +prompt('a?', 0);
        this.secondNumber = +prompt('b?', 0);
    };

    this.getSum = function () {
        return this.firstNumber + this.secondNumber;
    };

    this.getsubtraction = function () {
        return this.firstNumber + this.secondNumber;
    };

    this.getMultiplication = function () {
        return this.firstNumber * this.secondNumber;
    };

    this.getdivision = function () {
        return this.firstNumber + this.secondNumber;
    };
}

let calculator = new Calculator();
calculator.getNumbers();

console.info("Sum=" + calculator.getSum());
console.info("Mul=" + calculator.getsubtraction());
console.info("Mul=" + calculator.getMultiplication());
console.info("Mul=" + calculator.getdivision());






// const firstNumber = Math.random() * 10;
// const secondNumber = Math.random() * 5;
// console.info(firstNumber, secondNumber)

// function Calculator(firstNumber, secondNumber) {
//     firstNumber;
//     secondNumber;

//     this.sum = () => {
//         console.info(firstNumber + secondNumber).toFixed(2);
//     }

//     this.subtraction = () => {
//         console.info(firstNumber - secondNumber).toFixed(2);
//     };
// }

// // let getSum = new Calculator(firstNumber, secondNumber);
// // getSum.sum();

// let getsubtraction = new Calculator(firstNumber, secondNumber);
// getSum.subtraction();
