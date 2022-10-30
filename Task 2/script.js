/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let counter = 0;

function showTimesButtonPressed() {
    counter++;

    const buttonState = document.querySelector("#button-state")

    buttonState.innerText = counter;
}
document.querySelector("#button-element").addEventListener("click", showTimesButtonPressed);