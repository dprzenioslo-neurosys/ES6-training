
function foo() {
    console.log("OUTSIDE");
}

foo();

{
    foo();
    function foo() {
        console.log("INSIDE");
    }
}

foo();
