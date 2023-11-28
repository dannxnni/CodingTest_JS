function solution(strArr) {
    const arr = strArr.map(v => v.length);
    const res = {};
    
    arr.forEach(i => {
        res[i] = (res[i] || 0) + 1;
    });
    return Math.max(...Object.values(res));
}