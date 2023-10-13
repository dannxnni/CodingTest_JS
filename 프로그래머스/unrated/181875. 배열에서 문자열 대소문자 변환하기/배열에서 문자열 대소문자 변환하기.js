function solution(strArr) {
    let ans = [];
    
    for (let i = 0; i < strArr.length; i++) {
        if (i % 2 === 0) {
            ans.push(strArr[i].toLowerCase());
        }
        else if (i % 2 === 1) {
            ans.push(strArr[i].toUpperCase());
        }
    }
    return ans;
}