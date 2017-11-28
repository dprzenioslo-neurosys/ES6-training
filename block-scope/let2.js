const y = 0;

(function foo(x = 5, y = y + 1) {
    console.log(x*y);
}())