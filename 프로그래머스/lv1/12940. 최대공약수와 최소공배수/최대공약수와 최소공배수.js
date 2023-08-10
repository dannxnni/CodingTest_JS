function solution(n, m) {
    let ans = [];
    
    let a = n;
    let b = m;
    
    // 최대공약수
    while (a % b !== 0) {
        let r = a % b;
        
        if (r !== 0) {
            a = b;
            b = r;
        }
    }
    ans.push(b);
    
    // 최소공배수 = 두 수의 곱 / 최대공약수
    let min = (n * m) / b;
    ans.push(min);
    return ans;
}