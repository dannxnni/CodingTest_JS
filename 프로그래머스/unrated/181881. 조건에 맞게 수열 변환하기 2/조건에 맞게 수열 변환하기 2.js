function solution(arr) {
    let cnt = 0;
    
    while (true) {
        let curArr = arr.map(v => {
            if (v >= 50 && v % 2 === 0) return v / 2;
            if (v < 50 && v % 2 === 1)  return v * 2 + 1;
            else    return v;
        })
        let isSame = arr.every((a, i) => a === curArr[i]);
        if (isSame) break;
        cnt++;
        arr = curArr;
    }
    return cnt;
}