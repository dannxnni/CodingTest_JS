function solution(n) {
    let cnt = 0;
    let isPrime = new Array(n + 1).fill(true);
    
    for (let i = 2; i <= n; ++i) {
        if (isPrime[i] === false)   continue;
        
        for (let j = i * 2; j <= n; j += i) {
            isPrime[j] = false;
        }
    }
    for (let k = 2; k <= n; k++) {
        if (isPrime[k] === true) {
            cnt++;
        }
    }
    return cnt;
}