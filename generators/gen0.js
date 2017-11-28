function* generator() {
    console.log("Start!");
    yield;
    console.log("End!");
}

var it = generator();
var s = it.next();
var e = it.next();
console.log(s, e);