import { showUsers } from "./showUsers.js./";

const ENDPOINT = 'https://api.github.com/users';

const getUsers = async () => {
    try {
        const response = await fetch(ENDPOINT);
        const users = await response.json();

        showUsers(users);

        return users;

    } catch (error) {
        console.error(error);
    }
};

export { getUsers };