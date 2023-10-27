// https://eloquentjavascript.net/04_data.html#i_6xTmjj4Rf5

function reverseArray(arr) {
    let newArray = []; 
    for (i in arr) {
        newArray.unshift(arr[i]); 
    }
    return newArray; 
}

function reverseArrayInPlace(arr) {
    let i = 0;
    const halfLength = Math.floor(arr.length / 2); 
    while (i < halfLength) {
        let tmp = arr[i]; 
        arr[i] = arr[arr.length - (i + 1)]; 
        arr[arr.length - (i + 1)] = tmp; 
        i++; 
    }

}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// // → [5, 4, 3, 2, 1]
