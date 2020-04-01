interface Calculator {
    calculate(): void;
}

class InterestCalculator implements Calculator {
    constructor(private principalAmt : number = 1000, private interestRate: number = 1, private timeInYears: number = 1) { }
    
    public calculate(): void{
        console.log("This is an interest calculator!");
        console.log(`Simple interest is: ${this.principalAmt * this.interestRate * this.timeInYears/100}`);
    }
} 

class ShapeCalculator implements Calculator {
    constructor(private numberOfSides: number = 4) { }

    calculate(): void {
        console.log("This is a shape calculator!");
        console.log(`Shape has ${this.numberOfSides} sides.`)
    }    
}

let IntCal = new InterestCalculator(2000,4,1);
IntCal.calculate();
let ShapeCal = new ShapeCalculator(3);
ShapeCal.calculate();