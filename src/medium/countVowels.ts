function countVowels(input: string): number {
    const vowels = "aeiouAEIOU";
    let vowelsCount: number = 0;
    let nonVowelsCount: number = 0;

    for(let char of input){
        if(vowels.includes(char)){
            vowelsCount++
        } else {
            nonVowelsCount++
        }
    }

    console.log(`Number of non-vowels: ${nonVowelsCount}`);
    return vowelsCount;
}

const inputString = "Samar Sharma";
const vowelsCount = countVowels(inputString);
console.log(`Number of vowels in ${inputString}: ${vowelsCount}`);