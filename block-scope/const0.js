// "use strict";

// Object.seal
// Object.freeze


const PI = 3.141592;

const widths = ["thin", "regular", "bold", "black"];

const props = {
    width: 150,
    height: 150,
    colours: ["red", "blue", "black"],
};

//PI = 2.71828;
widths[4] = "added";
props.colors = ["added1", "added2", "added3"];
props.colours[0] = "CHANGED!";
delete props.height;


console.log(PI);
console.log(widths);
console.dir(props);