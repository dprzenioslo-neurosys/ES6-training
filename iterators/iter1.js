
/* natywne iterable */

var arr = [1, 2, 3];

var arrIterator = arr[Symbol.iterator]();

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());


/* tworzenie własnego iterabla */

function Array2(data) {
    this.data = data;
}


Array2.prototype[Symbol.iterator] = function iterable() {
    var currentIndex = 0;
    return {
        //data: this.data,
        // [Symbol.iterator]: function() {
        //     return this;
        // },
        next: () => {
            if(currentIndex < this.data.length) {
                return {
                    value: this.data[currentIndex++],
                    done: false,
                }
            }
            return {
                done: true,
            }
        }
    };
}


var myFancyArray = new Array2([1,2,3,4,5]);


// var arrIterator2 = myFancyArray[Symbol.iterator]();

// console.log(arrIterator2.next());
// console.log(arrIterator2.next());
// console.log(arrIterator2.next());
// console.log(arrIterator2.next());


for(let el of myFancyArray) {
    console.log(el);
}
