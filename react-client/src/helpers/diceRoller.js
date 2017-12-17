let dice = [
  'aaafrs',
  'aaeeee',
  'aafirs',
  'adennn',
  'aeeeem',
  'aeegmu',
  'aegmnn',
  'afirsy',
  'bjkqxz',
  'ccenst',
  'ceiilt',
  'ceilpt',
  'ceipst',
  'ddhnot',
  'dhhlor',
  'dhlnor',
  'dhlnor',
  'eiiitt',
  'emottt',
  'ensssu',
  'fiprsy',
  'gorrvw',
  'iprrry',
  'nootuw',
  'ooottu',
];

dice = shuffle(dice);

// shuffle randmozies the order of the elements in an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// makeBoard
function makeBoard(diceArray) {
  const board = [];
  diceArray.forEach((die) => {
    const sideUp = randomIntFromInterval(0, 5);

    const charOnTop = die.charAt(sideUp);

    if (charOnTop === 'q') {
      board.push({ val: 'Qu', selected: false });
    } else {
      board.push({ val: charOnTop.toUpperCase(), selected: false });
    }
  });
  return board;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = makeBoard(dice);

