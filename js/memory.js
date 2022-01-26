console.log("memory.js Loaded");
class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.guessedPairs === 0;

    this.playedCards = [];

    this.score = 0;
    this.clickedPairs = 0;

    this.shuffleCards();
  }

  shuffleCards() {
    // ... write your code here
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  checkIfPair() {
    // ... write your code here
    console.log(this.playedCards)
    if(this.playedCards[0].dataset.cardName ===this.playedCards[1].dataset.cardName)
    return true;

  }

  checkIfGameOver() {
    // ... write your code here
   return this.guessedPairs === this.cards.length / 2;
  }

  playCard(card){

    let playResults ={ "isPair": false, "playedCards": [] }

    if(this.playedCards.length < 2){
      this.playedCards.push(card);
    }
    
    if(this.playedCards.length === 2){
      this.clickedPairs++;
      if(this.checkIfPair()){
        playResults = { isPair: true, playedCards: this.playedCards }
        this.score++;
        this.guessedPairs++;
        this.playedCards = [];
      }else{
        playResults = { isPair: false, playedCards: this.playedCards }
        this.playedCards = [];
      };
    }
    return playResults; 
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
