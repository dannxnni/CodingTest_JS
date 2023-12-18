function solution(n) {
    let ans = [];
    let div = 2;
    
    while (n >= 2) {
        if (n % div === 0) {
            ans.push(div);
            n /= div
        }
        else    div++;
    }
    return [...new Set(ans)];
}