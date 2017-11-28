
function sthAsync() {
    setTimeout(function () {
        it.next("After 3 secs.");
    }, 3000);
}

function *dummy() {
    var a = yield sthAsync();
    var b = a.toUpperCase();
    console.log(b);
}

var it = dummy();
it.next();


//////////////////////////////////////////////////////////////

function runGenerator(g) {
    var it = g(), ret;
    (function iterate(val){
        ret = it.next( val );

        if (!ret.done) {
            if (ret.value.then) {
                ret.value.then( iterate );
            }
            else {
                setTimeout( function(){
                    iterate( ret.value );
                }, 0 );
            }
        }
    })();
}

function sthAsyncWithPromise() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>resolve("After 4 secs"), 4000);
    });
}

function *lessDummy() {
    var a = yield sthAsyncWithPromise();
    var b = a.toUpperCase();
    console.log(b);
}

runGenerator(lessDummy);
