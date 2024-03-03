function findLargestElement(numbers: number[]): number {
    let largest = numbers[0];

    numbers.forEach(function(number){
        if(number > largest){
            number = largest;
        }
    })
    return largest;
}

const largestValue: number = findLargestElement([2, 4, 7, 8, 2]);
console.log(largestValue);