
var items = ["carrot", "apple", "milk", "chicken"];
console.log("My full shopping list:", items);

{ 
    items = items.map((item) => item.toUpperCase());
    var items = items.filter((item) => item.startsWith("C"));
    console.log("My filtered shopping list:", items);
}
