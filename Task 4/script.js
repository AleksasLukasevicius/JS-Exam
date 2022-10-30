/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const getCars = async () => {
    try {
        const response = await fetch(ENDPOINT);
        const cars = await response.json();

        createCars(cars);

        return cars;

    } catch (error) {
        console.error(error);
    }
};

getCars();

const createCars = (cars) => {
    cars.forEach((car) => {
        const carContainer = document.createElement("div");
        const carBrandElement = document.createElement("h3");
        const carModelListElement = document.createElement("ul");

        const models = car.models;
        carBrandElement.innerText = car.brand;

        models.forEach((model) => {
            const carModelElement = document.createElement("li");

            carModelElement.innerText = model;
            carModelListElement.append(carModelElement);
        });

        carContainer.append(carBrandElement, carModelListElement);
        document.querySelector("#output").append(carContainer);
    });
};
