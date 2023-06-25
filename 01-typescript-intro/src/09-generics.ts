export function whatsMyType<T> (argument: T): T{
    return argument
}

let amIString = whatsMyType<string>('Hello world');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log({
    result1: amIString.split(' '),
    result2: amINumber.toFixed(2),
    result3: amIArray.join('-')
});