const cards = ["queen", "king", "queen", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];



cardsInPlay.push(cardOne);
console.log("User has flipped " + cardOne);
cardsInPlay.push(cardTwo);
console.log("User has flipped " + cardTwo);

if(cardsInPlay.length === 2) {
    if(cardOne == cardTwo) {
        alert("You found a match!");
    } else {
        alert("sorry try again");
    }
}