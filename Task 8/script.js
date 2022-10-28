/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function calculator(firstNumber, secondNumber, operator) {
    operator = prompt("Koks veiksmas: sum, subtraction, multiplication, division?", "sum")
    firstNumber = +prompt("Enter first number", 2);
    secondNumber = +prompt("Enter second number", 2);

    if (operator === "sum") {
        return firstNumber + secondNumber;

    } else if (operator === "subtraction") {
        return firstNumber - secondNumber;

    } else if (operator === "multiplication") {
        return firstNumber * secondNumber;

    } else if (operator === "division") {
        return firstNumber / secondNumber;

    } else { }
}

alert(calculator("", "", "operator"));



