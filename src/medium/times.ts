function calculateTime(n: number): number {
    return 0.01;
}

function calculateSum(n: number): { sum: number, timeInSeconds: number } {
    const startTime: number = new Date().getTime();
    let sum: number = 0;
    for(let i: number = 0; i <= n; i++) {
        sum += i;
    }
    const endTime: number = new Date().getTime();
    const timeInSeconds: number = (endTime - startTime) / 1000;
    return { sum, timeInSeconds };
}

console.log(calculateSum(100));
console.log(calculateSum(100000));
console.log(calculateSum(1000000000));
