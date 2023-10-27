// https://eloquentjavascript.net/04_data.html#i_8ZspxiCEC/

function range(start, end, step = 1) {
    let set = [];  
    if (start > end && step < 0) {
        for (let i = start; i >= end; i += step) {
            set.push(i); 
        }
    } else {
        for (let i = start; i <= end; i += step) {
            set.push(i); 
        }
    }
    return set; 
}

function sum(arr) {
    let sum = 0; 
    for (i in arr) {
        sum += arr[i];
    }
    return sum; 
}

console.log(range(5, 2, -1));
console.log(sum(range(5, 2, -1))); 
