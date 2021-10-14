const oldM3 = {
    name: 'M3',
    year: 1995,
    broken: true
};

const printVehicle = (vehicle: {name: string; year: number; broken: boolean}) => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldM3);

// Let's improve the above using an interface so we avoid duplicate code
interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
}

const printVehicleInterface = (vehicle: Vehicle) => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
}

printVehicleInterface(oldM3);

// We can expand with more complex types
interface VehicleExpanded {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

const oldM4 = {
    name: 'M4',
    year: new Date(),
    broken: true,
    summary(): string{
        return `Name: ${this.name}`;
    }
}

const printVehicleExpandedInterface = (vehicle: VehicleExpanded) => {
    console.log(`Summary: ${vehicle.summary()}`);
}

printVehicleExpandedInterface(oldM4);

// We can also condense the interface and make it more generic/abstract
interface Reportable {
    summary(): string;
}

const oldM5 = {
    name: 'M4',
    year: new Date(),
    broken: true,
    summary(): string{
        return `Name: ${this.name}`;
    }
}

// Notice how oldM5 only needs to qualify for interface using summary()
const printSummary = (item: Reportable) => {
    console.log(`Summary: ${item.summary()}`);
}

printSummary(oldM4);

// now we can use it with a different objects

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string{
        return `My drink has ${this.sugar} grams of sugar`;
    }
}

printSummary(drink);