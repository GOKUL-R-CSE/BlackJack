

let cards = [];

let sum = 0;

let hasBlackJack = false;

let isAlive = false;

let hasStarted = true;

let message = "";

let messageEl = document.getElementById("message");
// let sumEl = document.getElementById("sum");
let sumEl = document.querySelector("#sum");
let cardEl = document.getElementById("card");

let player = {
    name: "Gokul",
    chips: 0,
}


let playerEl = document.getElementById("player");

playerEl.textContent = `${player.name} : $ ${player.chips}`



function getRandomCard() {
    let card = Math.floor(Math.random() * 13) + 1;
    if (card === 1) {
        return 11
    }
    else if (card > 10) {
        return 10;
    }
    return card;
}

function startGame() {
    if (hasStarted === true) {
        hasStarted = false

        isAlive = true;

        let firstCard = getRandomCard();

        let secondCard = getRandomCard();

        cards.push(firstCard);
        cards.push(secondCard);

        sum = firstCard + secondCard

        renderGame();
    }

}

function renderGame() {
    cardEl.textContent = `Cards : `

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += `${cards[i]} `;
    }

    sumEl.textContent = `Sum : ${sum}`;
    if (sum < 21) {
        message = "Do you want to draw a new card ? ";
        isAlive = true;
    }

    else if (sum === 21) {
        message = "You've got Blackjack ! ";
        hasBlackJack = true;
        isAlive = false;
        player.chips += 20;
        hasStarted = true
        for (let i = cards.length - 1; i >= 0; i--) {
            cards.pop()
        }
    }

    else {
        message = "You've out of the game ! ";
        isAlive = false;
        player.chips -= 10;
        hasStarted = true
        for (let i = cards.length - 1; i >= 0; i--) {
            cards.pop()
        }
    }
    messageEl.textContent = message;
    playerEl.textContent = `${player.name} : $ ${player.chips}`
}

function newCard() {
    if (isAlive === true && hasBlackJack !== true) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }

}