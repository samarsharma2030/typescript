// Program in typescript to check whether two strings are anagram or not. 

function isAnagram(str1: string, str2: string): boolean {
    let len1: number = str1.length;
    let len2: number = str2.length;

    if(len1 != len2){
        console.log("Invalid input");
        return false;
    }

    const sortedStr1: string = str1.toLowerCase().split('').sort().join('');
    const sortedStr2: string = str2.toLowerCase().split('').sort().join('');

    if(sortedStr1 === sortedStr2){
        console.log("Strings are anagram");
        return true;
    } else {
        console.log("Strings are not anagram");
        return false;
    }
}

const value: boolean = isAnagram("listen", "silent");
console.log(value);