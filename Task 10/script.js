import { compositionOperator } from "./modules/math/composition.js";
import { divisionOperator } from "./modules/math/division.js";
import { multiplicationOperator } from "./modules/math/multiplication.js";
import { substractionOperator } from "./modules/math/subtraction.js";
import { one, two, three, four, five } from "./modules/numbers/numbers.js";


/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

let a = compositionOperator(one, four);
let b = divisionOperator(four, two);
let c = substractionOperator(three, two);
let d = multiplicationOperator(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
