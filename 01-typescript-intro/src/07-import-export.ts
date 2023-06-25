import {Products, taxCalculation } from './06-functions-destructuring';
const shoppingCart : Products[] = [
    { description: 'airpods', price: 200 },
    { description: 'iPhone 12', price: 550 }
];

const tax = 0.15;
const [total, taxCalculated] = taxCalculation({products: shoppingCart, tax});

console.log({total, taxCalculated});