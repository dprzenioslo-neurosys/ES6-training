function* sayHello() {
    var who = (yield 99).toUpperCase();
   return `I say hello to my ${yield null} ${who}`;
}

var it = sayHello();
var howMany = it.next().value;
it.next("cats");
console.log(it.next(howMany+1).value);