
console.log("index.js Loaded");

const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

let memoryGame = new MemoryGame(cards);

const memoryBoard = document.getElementById("memory-board");

const cardElements = memoryGame.cards.map(
  card =>{

    const outsideDiv = document.createElement("div");
    
    outsideDiv.classList.add("card")
    outsideDiv.setAttribute("data-card-name",card.name)

    const backDiv = document.createElement("div");
    backDiv.classList.add("back");
    backDiv.setAttribute("name", card.img);

    const frontDiv = document.createElement("div")
    frontDiv.classList.add("front")
    frontDiv.style = `background: url(img/${card.img}) no-repeat`

    outsideDiv.appendChild(backDiv);
    outsideDiv.appendChild(frontDiv);

    return outsideDiv;

    
      // These actions can only be taken when the page is completely loaded
  /*
   *
   The following code creates a html element that has the following contents
    <div class="card" data-card-name="${card.name}">
      <div class="back" name="${card.img}"></div>
      <div class="front" style="background: url(img/${card.img}) no-repeat"></div>
    </div>
  */

  }  
)

cardElements.forEach(card=> {
  
  card.addEventListener("click",
  event => {
    const clickedCard = event.currentTarget;
    flipCard(clickedCard);

    const playResults = memoryGame.playCard(clickedCard)

      // the following line is based on the fact that I would like to pass complex object from the game logic
      // the object is: { isPair: false, playedCards: this.playedCards }
      if(playResults.isPair){
        playResults.playedCards.forEach(card=> setCardsToGuessed(card))
      
      }else{
        playResults.playedCards.forEach( card=>{
          setTimeout(()=>flipCard(card), 1 * 1000)
        })
      }
        updateScoreBoard(
          memoryGame.score,
          memoryGame.clickedPairs,
          memoryGame.guessedPairs
          )
          if(memoryGame.checkIfGameOver()) gameWon();      
})
  memoryBoard.appendChild(card);
})

const updateScoreBoard=(score,clicked,guessed)=>{
  document.getElementById('score').innerText = score;
  document.getElementById('pairs-clicked').innerText = clicked;
  document.getElementById('pairs-guessed').innerText = guessed;
}


const flipCard = (card) => {
  card.classList.toggle("turned");
}

function setCardsToGuessed(card) {
  card.classList.add('guessed');
}