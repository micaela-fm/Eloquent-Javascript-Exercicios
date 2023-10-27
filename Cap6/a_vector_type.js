// https://eloquentjavascript.net/06_object.html#i_zO8FRQBMAy

class Vec {
    constructor(x, y) {
        this._x = x; 
        this._y = y; 
    }

    plus(vector) {
        return new Vec(this._x + vector._x, this._y + vector._y);      
    }

    minus(vector) {
        return new Vec(this._x - vector._x, this._y - vector._y);      
    }

    get length() {
        return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2)); 
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5