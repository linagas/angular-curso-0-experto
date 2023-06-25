const name: string = 'John';
//name = 123;  Error typescript infiere el tipo de dato
let hpPoints: number | 'Full' =  123;

hpPoints = 'Full';

const isActive: boolean = true;
console.log({name, hpPoints, isActive})

export {}