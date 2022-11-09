/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

<<<<<<< HEAD
function showObjectKeys(object) {
  return Object.keys(object);
}
=======
showObjectKeys = Object.keys(audi);
>>>>>>> 872607f7d51df0ccdb575134e2c770b94ab4153b

console.info(`Object audi keys: ${showObjectKeys(audi)}`);