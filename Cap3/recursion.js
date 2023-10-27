// https://eloquentjavascript.net/03_functions.html#i_jxl1p970Fy

function evenOrOdd(number) {
    if (number === 0) {
        return 'even'; 
    } else if (number === 1) {
        return 'odd'; 
    } else if (number < 0) {
            return evenOrOdd(-number); 
    } else {
        return evenOrOdd(number - 2); 
    }
}

console.log(evenOrOdd(50));
console.log(evenOrOdd(75));
console.log(evenOrOdd(-10));  
