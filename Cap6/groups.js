// https://eloquentjavascript.net/06_object.html#i_rpYp9Ou4LG

class Group {
    constructor() { }

    add(value) {
        if(!(value in this)) {
            this.set(value); 
        }
    }

    // delete(value) {
    //     if(value in this) {
    //         this -= value; 
    //     }
    // }

    // has(value) {
    //     return value in this; 
    // }

    from(interval) {
        for (let value = interval[0]; value <= interval[1]; value++) {
            this.add(value);             
        }
    }
}

let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
group.add(10);
console.log(group);
// group.delete(10);
// console.log(group.has(10));
// → false