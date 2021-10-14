const add = (a:number, b:number): number => {
    return a+b;
}
console.log(add(2,3));

const subtract = (a:number, b:number): number => {
    return a-b;
}
console.log(subtract(3,2));


const divide = (a:number, b:number): number => {
    return a/b;
}
console.log(divide(7,3));

const multiply = function(a:number, b:number): number {
    return a*b;
}
console.log(multiply(2,3));


const logger = (message:string): void => {
    console.log(message)
}

// super edge case, but just want to show 'never' type
const throwError = (message:string): never => {
    throw new Error(message);
}

const todaysWeather = {
    date: new Date(),
    weather: 'Sunny'
}

const logWeather = ({date, weather}: {date: Date, weather: String}):void=>{
    console.log(date, weather);
};

logWeather(todaysWeather);






