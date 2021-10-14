// type annotated
const  carMakers: string[] = ['bmw', 'mercedes', 'porsche'];

// type inferred
const dates = [new Date(), new Date()];

// Type inferred
const carsByMake=[['320i'],['A300'],['911']];

// Type can't be inferred so we annotate the type
const carsByMaker: string[][] = [];

// Inference helping when extracting values, car has type String now.
const car = carMakers[0];
const myCar = carMakers.pop[2];

// Prevent incompatible types
// carMakers.push(99);

// Help with 'map'
carMakers.map((car:string): string =>{
    return car.toUpperCase();
});


// Multiple types in the same array
// const importantDates = [ new Date(), '2012-12-12'];
const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push('12/12/12');

