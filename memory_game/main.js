var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png"
	}
]
var cardsInPlay = [];

// worked with Dan for the checkForMatch function.

var checkForMatch = function(n) {      
	var str = '[data-id="'+n+'"]';
	var cardClicked = document.querySelectorAll(str)[0];		
	cardClicked.setAttribute('src',cards[n].cardImage);	
	
	if(cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
      		alert("You found a match!");
  		} else {
      		alert("Sorry, try again.");
  		}
	}	
}

var flipCard = function() {	
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch(cardId); 	
}
var createBoard = function() {
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src',"images/back.png");
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);		
	}
}
createBoard();
