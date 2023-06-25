export interface Products {
    description: string;
    price: number;
}

const phone: Products = {
    description: 'iPhone 12',
    price: 150
}

 export const ipad: Products = {
    description: 'iPad Pro',
    price: 200
}

interface TaxCalculationOptions {
    tax: number;
    products: Products[];
}

//const taxCalculation = ({ tax, products}: TaxCalculationOptions): [number, number] => {
export const taxCalculation = (options: TaxCalculationOptions): [number, number] => {
    const { tax, products} = options;
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax];
};

const shoppingCart = [phone, ipad];
const tax = 0.15

const [total, taxCalculated] = taxCalculation({products: shoppingCart, tax});

console.log({total, taxCalculated});
