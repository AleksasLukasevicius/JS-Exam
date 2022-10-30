const showUsers = (users) => {
    users.forEach((user) => {
        const usersContainerWrapper = document.querySelector("#output");
        const userCard = document.createElement("div");
        const userCardAvatar = document.createElement("img");
        const userCardLoginElement = document.createElement("h5");

        userCardAvatar.src = user.avatar_url;
        userCardLoginElement.innerText = user.login;

        userCard.prepend(userCardAvatar, userCardLoginElement);
        usersContainerWrapper.prepend(userCard);
    });
};

export { showUsers };