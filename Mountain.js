//we must use this syntax since interfaces cannot use constructors
//this is called object literal syntax, we make an object and store it in
//a mountain variable which converts it from a generic object to a Mountain
var m = { name: "Everest", height: 29029 };
var m2 = { name: "Kilimanjaro", height: 19341 };
var m3 = { name: "Denali", height: 20310 };
// console.log(m);
var mountains = [m2, m, m3];
var tallest = findNameOfTallestMountain(mountains);
console.log(tallest);
function findNameOfTallestMountain(mountains) {
    if (mountains[0].height > mountains[1].height) {
        var diff = (mountains[0].height - mountains[2].height);
        if (diff > 0) {
            return mountains[0].name;
        }
        else {
            return mountains[2].name;
        }
    }
    else if (mountains[1].height > mountains[2].height) {
        return mountains[1].name;
    }
    else {
        return mountains[2].name;
    }
}
var p1 = { name: "banana", price: 2.99 };
var p2 = { name: "strawberry", price: 1.99 };
var p3 = { name: "mang0", price: 7.99 };
var products = [p1, p2, p3];
var prodAverage = calcAverageProductPrice(products);
console.log(prodAverage);
function calcAverageProductPrice(products) {
    var total = 0;
    for (var i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    var average = total / products.length;
    return average;
}
var ii = { product: { name: "motor", price: 10.00 }, quantity: 10 };
var ii2 = { product: { name: "sensor", price: 12.50 }, quantity: 4 };
var ii3 = { product: { name: "LED", price: 1.00 }, quantity: 20 };
var inventory = [ii, ii2, ii3];
var totalValue = calcInventoryValue(inventory);
console.log(totalValue);
function calcInventoryValue(inventory) {
    var iitotal = inventory[0].product.price * inventory[0].quantity;
    var ii2total = inventory[1].product.price * inventory[1].quantity;
    var ii3total = inventory[2].product.price * inventory[2].quantity;
    var grandtotal = (iitotal + ii2total + ii3total);
    return grandtotal;
}
