/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const getUsers = async () => {
    try {
        const response = await fetch(ENDPOINT);
        const users = await response.json();

        return users;

    } catch (error) {
        console.error(error);
    }
};

getUsers();

// const createUserCard = (user) => {
//     const img = document.createElement('img');
//     img.src = user.picture.large;
//     img.alt = `${user.name.first} profile picture`;

//     const userFullName = document.createElement('h2');
//     userFullName.innerText = `${user.name.first} ${user.name.last}`;

//     const userAge = document.createElement('h4');
//     userAge.innerText = `${user.dob.age} years old`;

//     const contacts = document.createElement('h4');
//     contacts.innerText = `E-mail: ${user.email}`;

//     const card = document.createElement('div');
//     card.prepend(img, userFullName, userAge, contacts);
//     document.body.div.prepend(card);
// };