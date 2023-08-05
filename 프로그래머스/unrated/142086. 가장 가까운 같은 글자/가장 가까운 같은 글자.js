function solution(s) {
    const res = [];
    const arr = [];
    
    for (let i = 0; i < s.length; i++) {
        if (arr.includes(s[i])) {
            res.push(i - arr.lastIndexOf(s[i]));
        } else {
            res.push(-1);
        }
        arr.push(s[i]);
    }
    return res;
}