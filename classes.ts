class Vehicle {
    color: string;
    wheels: number;

    constructor(color: string, wheels: number){
        this.color = color;
        this.wheels = wheels;
    }

    protected honk(): void{
        console.log('BEEP BOOP');
    }
}

class BMW extends Vehicle{

    constructor(public gearsystem: string, color: string, wheels: number){
        super(color, wheels);

    }

    private drive():void{
        console.log('WEEEOOOWEOOO');
    }

    startDriving(): void{
        this.honk();
        this.drive();
    }
}

const vehicle = new Vehicle('Red', 2);
const bmw = new BMW('automatic','Black', 4);
bmw.startDriving();
console.log(bmw.wheels);
console.log(bmw.color);
console.log(bmw);