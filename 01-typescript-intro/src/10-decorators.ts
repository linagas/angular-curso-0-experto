function classDecorator(constructor: any){
    return  class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    }
};

@classDecorator
export class SuperClass {
    public myProperty: string = 'ABC123';

    print() {
        console.log(this.myProperty)
    }
}

const myClass = new SuperClass();

console.log({SuperClass, myClass});