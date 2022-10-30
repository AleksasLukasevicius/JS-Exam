const showUsers = (users) => {
    users.forEach((user) => {
        const usersContainerWrapper = document.querySelector("#output");
        const userCard = document.createElement("div");
        const userCardLoginElement = document.createElement("h4");
        const userCardAvatar = document.createElement("img");

        userCardLoginElement.innerText = user.login;
        userCardAvatar.src = user.avatar_url;

        userCard.prepend(userCardAvatar, userCardLoginElement);
        usersContainerWrapper.prepend(userCard);
    });
};

export { showUsers };