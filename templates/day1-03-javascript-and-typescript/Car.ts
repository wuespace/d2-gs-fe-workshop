export default class Car {
    constructor(public make: string, 
                public model: string, 
                public year: number, 
                public horsepower: number, 
                public color: string, 
                public price: number) {}

    public description(): string {
        return `${this.make} ${this.model} ${this.year} (${this.horsepower}) in ${this.color}`;
    }

    // public prettyFormat() {}
}