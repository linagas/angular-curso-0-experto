function addNumber(a: number,b: number){
    return a+b;
} //====>
const addNumberArrow = (a: number,b: number):string => {
    return `${a+b}`;
}

const multiply = ( fristNumb: number, seconNumb?: number, base:number = 2 ) => {
    console.log({fristNumb, seconNumb, base})
    return  fristNumb + base

}

interface Candidate {
    name: string;
    age: number;
    skills: string[];
    sayHi?: () => string;
}

const addSkill = (candidate: Candidate, age: number) => {
    candidate.age += age
    return candidate
}

const candidate: Candidate = {
    name: 'Heliam',
    age: 31,
    skills: ['Angular', 'React', 'Vue']
}

const result = addNumber(1,2)
const resutlMultiply = multiply(5)

addSkill(candidate, 5)
console.log({result, result2: addNumberArrow(1,2), resutlMultiply, candidate})
export{}