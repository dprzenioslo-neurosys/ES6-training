
function makeGridIterator() {
    var rows = ["row1", "row2", "row3", "row4", "row5"];
    var rowsSoFar = 0;
    return {
        next: function () {
            if (rowsSoFar < rows.length) {
                return {
                    value: rows[rowsSoFar++],
                    done: false,
                };
            }
            return { done: true };
        }
    };

}

var it = makeGridIterator();

let item = it.next();
while(!item.done) {
    console.log(item.value);
    item = it.next();
}