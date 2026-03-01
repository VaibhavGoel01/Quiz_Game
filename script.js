const container = document.getElementById("games-container");

games.forEach(game => {

    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerText = game.name;

    card.onclick = () => {
        window.location.href = game.file;
    };

    container.appendChild(card);

});