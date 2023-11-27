function solution(myString, pat) {
    for (let i = myString.length - pat.length; i >= 0; i--) {
        if (myString.slice(i, i + pat.length) === pat) {
            return myString.slice(0, i + pat.length);
        }
    }
}