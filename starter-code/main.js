console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var createCards = function() {


	var gameBoard = document.getElementById('game-board');

	for (var i = 0; i < 4; i++) {
		var boardCard = document.createElement('div');
		boardCard.className = 'card';
		gameBoard.appendChild(boardCard);

	}

}

createCards();

/* unsure how to proceed with .setAttribute*/
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		cardElement.setAttribute('data-card', cards[i]);
		if ('data-card' < 2){
			'data-card' === "queen"
		} else {
			'data-card' === "king"
		}
	}

	for (i = 0; i < cards.length; i++) {
		cardElement.addEventListner('click', isTwoCards);
		cards[2, 3].innerHTML = '<img src="king.png" alt="King of Diamonds" />';
		cards[0, 1].innerHTML = '<img src="queen.png" alt="Queen of Spades" />';
	}
}

createBoard();

var isMatch = function() {
	if (cards[0] === cards[1]) {
		alert("You've found a match!");
	} else if ( cards[2] === cards[3]) {
		alert("You've found a match!"); 
	} else {
		alert("Sorry try again!");
	}
}

isMatch();

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

isTwoCards();