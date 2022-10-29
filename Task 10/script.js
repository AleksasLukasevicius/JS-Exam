import { compositionOperator } from "./modules/math/composition.js";
import { divisionOperator } from "./modules/math/division.js";
import { multiplicationOperator } from "./modules/math/multiplication.js";
import { substractionOperator } from "./modules/math/subtraction.js";
import { one, two, three, four, five } from "./modules/numbers/numbers.js";

/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

let sumResult = compositionOperator(one, four);
let divisionResult = divisionOperator(four, two);
let substractResult = substractionOperator(three, two);
let multiplyResult = multiplicationOperator(five, two);

console.info(`Composition: ${one} + ${four} = ${sumResult}`);
console.info(`Division: ${four} / ${two} = ${divisionResult}`);
console.info(`Substraction: ${three} - ${two} = ${substractResult}`);
console.info(`Multiplication: ${five} * ${two} = ${multiplyResult}`);