function solution(n) {
    let ans = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1)    ans.push(i);
    }
    return ans;
}