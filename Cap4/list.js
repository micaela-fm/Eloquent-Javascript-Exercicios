// https://eloquentjavascript.net/04_data.html#i_nSTX34CM1M

function arrayToList(arr) {
    let list = {};
    if(arr[1] === undefined) {
        list = {
            value: arr[0], 
            rest: null
        }; 
    } else {
        list = { 
            value: arr[0], 
            rest: arrayToList(arr.slice(1))
        }; 
    }
    return list; 
}

function listToArray(list) {
    let arr = []; 
    if (list.rest === null) {
        arr.push(list.value); 
    } else {
        arr = arr.concat(listToArray(list.rest));
        arr.unshift(list.value);
    }
    return arr; 
}

function prepend(elem, list) {
    let newList = {
        value: elem, 
        rest: list
    }; 
    return newList; 
}

function nth(list, num) {
    if (list.rest === null) {
        if (num === 0) {
            return list.value;
        } else {
            return undefined;
        }
    } else if (num === 0) {
        return list.value;
    } else {
        return nth(list.rest, num - 1);
    }
}

console.dir(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20