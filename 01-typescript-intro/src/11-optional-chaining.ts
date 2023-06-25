export interface Passenger {
    name: string;
    children?: string[];
}


const passengerOne: Passenger = {
    name: 'Alejandro'
}
const passengerTwo: Passenger = {
    name: 'Omaira',
    children: ['Natalia', 'Gabriel']
}

/*
- ? is optional chaining
- ! is non-null assertion operator
*/
const printChildren = (passenger: Passenger): number => {
    //const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children!.length;
    console.log(howManyChildren);
    return howManyChildren;
};

printChildren(passengerTwo);