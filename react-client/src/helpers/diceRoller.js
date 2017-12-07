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

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function makeBoard(dice) {
    let board = [];
    dice.forEach(die => {
        let sideUp = randomIntFromInterval(0,5);

        let charOnTop = die.charAt(sideUp);

        if(charOnTop === 'q') {
            board.push({ val: 'Qu', selected: false })
        } else {
            board.push({ val: charOnTop.toUpperCase(), selected: false });
        }
    })
    return board;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


module.exports = makeBoard(dice);

