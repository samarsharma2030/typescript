function isPallindrome(str: string): boolean {
    let strLower = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
    let start = 0;
    let end = strLower.length - 1;

    while(start < end) {
        if(strLower[start] !== strLower[end]){
            return false;
        } 
        start ++;
        end --;
    }
    return true;
}

const pValue: boolean = isPallindrome("Nan");
console.log(pValue);