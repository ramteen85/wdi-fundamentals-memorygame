var cards = [
    {
        rank: "Queen",
        suit: "Hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "Queen",
        suit: "Diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "King",
        suit: "Hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "King",
        suit: "Diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
var cardsInPlay = [];

function checkForMatch(clickedCard) {
    var found = false;
    console.log(cardsInPlay[0]);
    for(var x = 0; x < cardsInPlay.length; x++) {
        if(cardsInPlay[x] === clickedCard) {
            found = true;
            alert("You found a match!");
        }
    }
    if(cardsInPlay.length > 0 && !found)
    {
        alert("Sorry, try again.");
    }
    
}

function flipCard() {
    var cardId = this.getAttribute('data-id');
    var clickedCard = document.querySelectorAll('#game-board img');
    clickedCard[cardId].src = cards[cardId].cardImage;
    console.log("User flipped " + cards[cardId].rank);
    checkForMatch(cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log("Image path: " + cards[cardId].cardImage);
    console.log("Card suit: " + cards[cardId].suit);
}

function createBoard() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        var gameBoard = document.querySelector('#game-board');
        gameBoard.appendChild(cardElement);
    }    
}

createBoard();
