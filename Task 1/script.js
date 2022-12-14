/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector('form').addEventListener('submit', convertKgToPoundsGramsOunces)

function convertKgToPoundsGramsOunces(event) {
    event.preventDefault();

    const kilogramsInputValue = document.getElementById('search').value;

    const poundsOutputElement = document.querySelector('#output :nth-child(1) span');
    const gramsOutputElement = document.querySelector('#output :nth-child(2) span');
    const ouncesOutputElement = document.querySelector('#output :nth-child(3) span');

    if (kilogramsInputValue) {
        const kilograms = +kilogramsInputValue;

        const pounds = (kilograms / 2.2046).toFixed(4);
        const grams = (kilograms / 0.001);
        const ounces = (kilograms * 35.274).toFixed(2);

        poundsOutputElement.innerText = pounds;
        gramsOutputElement.innerText = grams;
        ouncesOutputElement.innerText = ounces;

    } else {
        poundsOutputElement.innerText = '';
        gramsOutputElement.innerText = '';
        ouncesOutputElement.innerText = '';
    };

};