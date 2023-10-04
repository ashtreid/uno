const colors = ['red', 'green', 'blue', 'yellow'];
const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'skip', 'reverse', 'drawTwo'];

function generateUnoDeck() {
  const deck = [];

  // add each color/value combination to the deck
  colors.forEach(color => {
    values.forEach(value => {
      // add only one 0 card of each color, but two of all others
      if (value === '0') {
        deck.push({ color, value });
      } else {
        deck.push({ color, value });
        deck.push({ color, value });
      }
    });
  });

  // add non-colored special action cards (wild, wildDrawFour)
  for (let i = 0; i < 4; i++) {
    deck.push({ color: 'wild', value: 'wild' });
    deck.push({ color: 'wild', value: 'wildDrawFour' });
  }

  return deck;
}

module.exports = generateUnoDeck;
