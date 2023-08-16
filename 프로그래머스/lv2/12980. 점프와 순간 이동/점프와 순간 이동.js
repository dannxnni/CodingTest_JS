function solution(n) {
    var ans = 0;
    var cnt = 0;
    
    while (n !== 1) {
        if (n % 2 !== 0) {  // 홀수
            n = n - 1;
            cnt++;
        } else {    // 짝수
            n = n / 2
        }
    }
    if (cnt > 0) {
        ans = cnt + 1;
    } else {
        ans = 1;
    }
    return ans;
}