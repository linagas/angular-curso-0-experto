//clasic definition
// export class Person{
//     public name: string;
//     private address: string;
//     constructor(name: string = 'No name', address?: string = 'No address') {
//         this.name = name;
//         this.address = address;
//     }

// }
//const person = new Person('Luis', 'Calle 123');
//console.log({name: person.name, address: person.address});

//short definition
export class Person{
    constructor(
        public firstname: string = 'No firstname', 
        public lastname: string = 'No Lastname', 
        private address: string = 'No address') {}
}


// Herencia
// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age?: number,
//         public realName?: string,
//         ){
//         super(realName, 'New York, USA')
//     }
// }



// composicion
export class Hero {
    constructor(
        public alterEgo: string,
        public age?: number,
        public realName?: string,
        public person: Person
        ){}
}

const person = new Person('Peter', 'Parker',  'New York, USA');
const hero = new Hero('Superman', 20, 'Peter Parker', person);
console.log({hero});