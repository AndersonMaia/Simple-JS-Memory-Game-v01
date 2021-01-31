document.addEventListener('DOMContentLoaded', () =>{

//card options
const cardArray = [
    {
        name:'dio',
        img: 'images/dio.png'
    },
    {
        name:'dio',
        img: 'images/dio.png'
    },
    {
        name:'maiden',
        img: 'images/maiden.png'
    },
    {
        name:'maiden',
        img: 'images/maiden.png'
    },
    {
        name:'megadeth',
        img: 'images/megadeth.png'
    },
    {
        name:'megadeth',
        img: 'images/megadeth.png'
    },
    {
        name:'motorhead',
        img: 'images/motorhead.png'
    },
    {
        name:'motorhead',
        img: 'images/motorhead.png'
    },
    {
        name:'sepultura',
        img: 'images/sepultura.png'
    },
    {
        name:'sepultura',
        img: 'images/sepultura.png'
    },
    {
        name:'testament',
        img: 'images/testament.png'
    },
    {
        name:'testament',
        img: 'images/testament.png'
    },
]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

//create the board
function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}

//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match');
        cards[optionOneId].setAttribute('src', 'images/black.png');
        cards[optionTwoId].setAttribute('src', 'images/black.png');
        cardsWon.push(cardsChosen);
    }else{
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations! You found them all! You rock!';
    }
}

//flip the card
function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500);
    }
}
createBoard();

})