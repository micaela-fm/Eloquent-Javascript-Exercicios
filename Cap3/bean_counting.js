// https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do

function countBs(str) {
    counter = 0; 
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'B') {
            counter++; 
        }
    }
    return counter; 
}

function countChar(str, char) {
    counter = 0; 
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            counter++; 
        }
    }
    return counter; 
}

console.log(countChar("Bobby's Big Blue Balloon bobbed briskly in the breeze, beckoning bystanders to behold its breathtaking beauty. Beneath the bright sky, children cheered, and balloons bobbed merrily, creating a brilliant spectacle.", 'b')); 