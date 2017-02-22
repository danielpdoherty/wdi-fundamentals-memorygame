console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardOne === cardTwo) {
	alert("You've found a match!");
} else if ( cardThree === cardFour) {
	alert("You've found a match!"); 
} else {
	alert("Sorry try again!");
}*/

var createCards = function() {


	var gameBoard = document.getElementById('game-board');

	for (var i = 0; i < 4; i++) {
		var boardCard = document.createElement('div');
		boardCard.className = 'card';
		gameBoard.appendChild(boardCard);

	}

}

createCards();