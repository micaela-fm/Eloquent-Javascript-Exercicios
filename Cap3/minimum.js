// https://eloquentjavascript.net/03_functions.html#i_XTmO7z7MPq

function minimum(num1, num2) {
    if(num1 < num2) {
        return num1; 
    } else {
        return num2; 
    }
}

console.log(minimum(0, 10));
console.log(minimum(0, -10)); 
