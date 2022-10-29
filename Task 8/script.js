/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

const firstNumber = Math.random() * 10;
const secondNumber = Math.random() * 5;

const calculator = () => {

    sum = (firstNumber + secondNumber).toFixed(2);

    subtraction = (firstNumber - secondNumber).toFixed(2);

    multiplication = (firstNumber * secondNumber).toFixed(2);

    division = (firstNumber / secondNumber).toFixed(2);

    return {
        sum,
        subtraction,
        multiplication,
        division,
    };
};

console.info(calculator(firstNumber, secondNumber));




