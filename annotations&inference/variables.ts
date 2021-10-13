// Annotation Examples
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let deNada: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let meNumber: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];


// Classes
class Car{}
let car: Car = new Car();

// Object literal
let point: {x:number; y:number;} = {
    x: 10,
    y: 20
};

// Function (actually modifying variable)
const logNumber: (i:number) => void = (i:number)=>{
    console.log(i);
} 
logNumber(2);

// const logNumbers: (i: number)=> void =  (...i:number[]) => {
//     console.log(i);
// };
 
// logNumbers(2,3,4,5);

/*
Inference
*/

// any
let oranges;
oranges = 5;

// inferred to be number, due to initialization as an int.
let orange = 1;

/*
Annotations
*/

// When to use annotation:

// a. When a function returns 'any', we need to clarify the value
    const json = '{"x":10, "y":20}';
    const coordinates = JSON.parse(json); // Notice that coordinates is type: any.
    console.log(coordinates); // Output: {x:10, y:20}

    // Fixing 'any' type example
    const jsonFixed = '{"x":10, "y":20}';
    const coordinatesFixed: {x: number; y:number} = JSON.parse(json);
    console.log(coordinatesFixed);

    // Now we can access individual properties
    console.log(coordinatesFixed.x);
    console.log(coordinatesFixed.y);

// b. When we declare variable on one line and then initialize later


    // foundWord is type any, this needs to get fixed
    let words = ['red', 'green', 'blue'];
    let foundWord;

    for (let i = 0; i < words.length; i++){
        if(words[i] === 'green'){
            foundWord = true;
        }
    }

    console.log(foundWord);

    // foundWordFixed, has now been fixed by using type annotation
    let wordsFixed = ['red', 'green', 'blue'];
    let foundWordFixed: boolean;

    for (let i = 0; i < wordsFixed.length; i++){
        if(wordsFixed[i] === 'green'){
            foundWordFixed = true;
        }
    }

    console.log(foundWordFixed);

// c. When we want a variable to a have a type that can't be inferred

    let numbers = [-10, -1, 12];
    // We want to assign the number that is above or zero or otherwise give it false if there
    // is no number above zero. This is bad code, but it proves the point, where we have an issue
    // that the variables type can't be inferred and we're possibly assigning different types to it.
    // Which will cause TS to complain. By adding boolean | number, a bit like OR statement.
    let numberAboveZero: boolean | number = false;

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > 0){
            numberAboveZero = numbers[i];
        }
    }

    console.log(numberAboveZero);



