function* generator() {
    yield "Start";
    yield "End";
    //throw new Error("OOPS!");
    return "Really end";
}

var [a,b] = generator();
var arr = [...generator()];
console.log(arr);

var it = generator();
console.log(it.next());
console.log(it.next());
console.log(it.next());