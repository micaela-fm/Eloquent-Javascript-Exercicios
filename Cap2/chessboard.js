const boardSize = 8;
const whiteSquare = ' ';
const blackSquare = '#';
let line;

function createLine(firstSquare, secondSquare) {
    line = '';
    for (let j = 0; j < boardSize; j++) {
        if (j % 2 === 0) {
            line += firstSquare;
        } else {
            line += secondSquare
        }
    }
    return line;
}

for(let i = 0; i < boardSize; i++) {
    if (i % 2 === 0) {
        createLine(whiteSquare, blackSquare);
    } else {
        createLine(blackSquare, whiteSquare);
    }
    console.log(line);
}

