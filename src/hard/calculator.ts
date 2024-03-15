class Calculator {
    result: number;

    constructor(result: number = 0){
        this.result = result;
    }

    add(num: number): void {
        this.result += num;
    }
    subtract(num: number): void {
        this.result -= num;
    }
    multiply(num: number): void {
        this.result *= num;
    }
    divide(num: number): void {
        if (num === 0){
            throw new Error("Cannot divide by Zero");
        }
        this.result /= num;
    }
    clear(): void {
        this.result = 0;
    }
    getResult(): number {
        return this.result;
    }

    calculate(expression: string): void {
        const cleanedExpression: string = expression.replace(/\s+/g, "");
        const isValidExpression: boolean = /^[0-9+\-*/(). ]+$/.test(cleanedExpression);

        if (!isValidExpression) {
            throw new Error("Expression is Invalid");
        }
        if(cleanedExpression.includes("/0")){
            throw new Error("Can't divide by Zero");
        }

        try {
            this.result = eval(cleanedExpression);
        } catch(error) {
            throw new Error("Invalid Expression");
        }
    }
}

const myCalculator = new Calculator();

try{
    myCalculator.add(10);
    myCalculator.subtract(5);
    myCalculator.multiply(1);
    myCalculator.divide(0);
    console.log("Result: ", myCalculator.getResult());
} catch (error){
    console.error("Error occurred", (error as Error).message)
}
