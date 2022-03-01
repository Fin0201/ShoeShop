//demonstrating the different objects and their methods
console.log('Examples of objects');

//define an object
//const means it wont change
//let means it will
//var is another wat to define let
const car = {
    make:"Ford",
    model:"Fiesta Ghia",
    engine:"1.4",
    fuel: "Unleaded",
    colour:"Hot Pink",
    price: 1499.99
}
//print car
console.log(car)
//print car detail
console.log(car.price)

//array of objects
const cars = [
    {
        make:"Ford",
        model:"Fiesta Ghia",
        engine:"1.4",
        fuel: "Unleaded",
        colour:"Hot Pink",
        price: 1499.99
    },
    {
        make:"Mini",
        model:"Cooper",
        engine:"1.8",
        fuel: "Unleaded",
        colour:"White",
        price: 2999.99
    },
    {
        make:"SEAT",
        model:"Ibiza",
        engine:"1.2 TDI",
        fuel: "Unleaded",
        colour:"Red",
        price: 2499.99
    }
]

// print single property
console.log(cars[1].model)

//search for a specific element
function SearchObject(search){

    const result = cars.find(car => car.make == search);
    console.log(result)
    return result
}

function VagueSearch(search){
    const result = cars.filter(items => items.name.contains(search));
    console.log(result)
    return result;
}