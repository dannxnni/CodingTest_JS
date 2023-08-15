function solution(n) {
    let ans = 0;
    let f0 = 0;
    let f1 = 1;
    
    // 피보나치 수를 구할 때마다 1234567로 나눈 것 중에서 n번째 수 반환
    for (let i = 2; i <= n; i++) {
        ans = (f0 + f1) % 1234567;
        f0 = f1;
        f1 = ans;
    }
    return ans;
}