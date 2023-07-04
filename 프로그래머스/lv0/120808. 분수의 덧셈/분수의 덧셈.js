function solution(d1, n1, d2, n2) {
    // 분자
    let top = n1 * d2 + n2 * d1;
    // 분모
    let bot = n1 * n2;
    // 최대공약수
    let max = 1;
    
    for (let i = 1; i <= top; i++) {
        if (top % i === 0 && bot % i === 0) {
            max = i;
        }
    }
    return [top / max, bot / max];
}