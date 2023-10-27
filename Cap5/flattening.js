// https://eloquentjavascript.net/05_higher_order.html#i_aIOczlLyX1

function flatten(arr) {
    let flattenedArray = []; 
    flattenedArray = arr.reduce((concatArr, nextArr) => 
    concatArr.concat(nextArr));
    return flattenedArray; 
}

let arrays = [[1, 2, 3], [4, 5], [6]];
newArray = flatten(arrays); 
console.log(newArray);
// → [1, 2, 3, 4, 5, 6]
