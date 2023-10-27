// https://eloquentjavascript.net/04_data.html#i_IJBU+aXOIC

function deepEqual(value1, value2){
    if(typeof value1 != "object" && typeof value2 != "object") {
        return value1 === value2;  
    } else {
        let keys1 = Object.keys(value1); 
        let keys2 = Object.keys(value2); 
        if(keys1.length !== keys2.length) {
            return false; 
        } else {
            for (let key of keys1) {
                if (!keys2.includes(key)) {
                    return false; 
                } else if (!deepEqual(value1[key], value2[key])) {
                    return false;
                }
            }
            return true;
        }
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true