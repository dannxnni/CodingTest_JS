function solution(i, j, k) {
    let cnt = 0;
    
    for (let n = i; n <= j; n++) {
        let strN = String(n).split("");
        for (let n of strN) {
            if (Number(n) === k)    cnt++;
        }
    }
    return cnt;
}