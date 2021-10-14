const profile = {
    name: 'memyselfandi',
    age: 9999,
    coords:{
        lat: 0, 
        long:2
    },
    setAge(age:number):void{
        this.age = age;
    }
};

// Destructuring object
const {age, name}: {age:number; name:string} = profile;
// Destructuring nested object
const {coords: {lat, long}}: {coords:{lat:number, long:number}} = profile;
