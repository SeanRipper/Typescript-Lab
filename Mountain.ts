
//what are interfaces and why are they needed in angular?
//interfaces are like classes - they can define properties, but unlike classes
//they may NOT add functiond or properties at run time <- prevent random functions from somehow sneaking their way into our code
//interfaces do not have constructors
//angular loves interfaces since they will behave consistently and it sidesteps a lot of common JS errors/weird behavior
//with interfaces every property MUST get a value
interface Mountain{
    name:string;
    height:number;
}

//we must use this syntax since interfaces cannot use constructors
//this is called object literal syntax, we make an object and store it in
//a mountain variable which converts it from a generic object to a Mountain
let m : Mountain = {name: "Everest", height: 29029}
let m2 : Mountain = {name: "Kilimanjaro",height: 19341}
let m3 : Mountain = {name: "Denali",height: 20310}
// console.log(m);
let mountains : Mountain[] = [m2,m, m3];

let tallest : string = findNameOfTallestMountain(mountains);
console.log(tallest);

function findNameOfTallestMountain(mountains : Mountain[]): string{
    if(mountains[0].height > mountains[1].height){
        let diff = (mountains[0].height - mountains[2].height)
        if(diff > 0){
            return mountains[0].name;
        }
        else{
            return mountains[2].name;
        }
    }
    else if(mountains[1].height > mountains[2].height) {
        return mountains[1].name;
    }
    else{
        return mountains[2].name;
    }
}


interface Product{
    name:string;
    price:number;
}

let p1 : Product = {name: "banana", price: 2.99}
let p2 : Product = {name: "strawberry", price: 1.99}
let p3 : Product = {name: "mang0", price: 7.99}

let products : Product[] = [p1,p2,p3];

let prodAverage : number = calcAverageProductPrice(products);
console.log(prodAverage);

function calcAverageProductPrice(products : Product[]) : number{
    let total : number = 0;
    for(let i : number = 0; i < products.length ;i++){
        total += products[i].price;
    }
    let average : number = total / products.length;
    return average;
}

interface InventoryItem{
    product:Product;
    quantity:number;
}

let ii : InventoryItem = {product: {name: "motor", price: 10.00},quantity: 10 };
let ii2 : InventoryItem = {product: {name: "sensor", price: 12.50}, quantity: 4};
let ii3 : InventoryItem = {product: {name: "LED", price: 1.00}, quantity: 20};

let inventory : InventoryItem[] = [ii,ii2,ii3];

let totalValue : number = calcInventoryValue(inventory);
console.log(totalValue);

function calcInventoryValue(inventory : InventoryItem[]):number{
    let iitotal : number = inventory[0].product.price * inventory[0].quantity;
    let ii2total : number = inventory[1].product.price * inventory[1].quantity;
    let ii3total : number = inventory[2].product.price * inventory[2].quantity;

    let grandtotal : number = (iitotal + ii2total + ii3total);

    return grandtotal;
}