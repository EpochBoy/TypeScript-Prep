// Tuples
// Same as an array, but ordered.
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// Pepsi is just an array
const pepsi = ['brown', true, 40];
// Now make Cola as a tuple
const cola: [string, boolean, number] = ['brown', true, 40];

// instead of creating type annotation in line we can do as such:
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 30];
const tea: Drink = ['brown', false, 0];

// Not clear what the value is representing here, due to lack of key
const carSpecs: [number, number] = [450, 900];

// Here it's more obvious using an object, the key let's us know what the number represents
// So tuples will rarely be used
const carStats ={
    horsepower: 450,
    weight: 900
};