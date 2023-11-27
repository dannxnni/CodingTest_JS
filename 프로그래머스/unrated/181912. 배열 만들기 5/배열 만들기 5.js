function solution(intStrs, k, s, l) {
    let res = [];
    
    for (arr of intStrs) {
        let subArr = arr.slice(s, s + l);
        if (subArr > k) res.push(Number(subArr));
    }
    return res;
}