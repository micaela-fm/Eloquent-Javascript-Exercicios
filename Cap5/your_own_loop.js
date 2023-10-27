// https://eloquentjavascript.net/05_higher_order.html#i_gKQ1S54F4o

function loop(start, test, update, body) {
    
    for (let value = start; test(value); value = update(value)) {
        body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1