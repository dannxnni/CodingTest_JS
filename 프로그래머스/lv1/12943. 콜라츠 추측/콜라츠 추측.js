function solution(num) {
    var ans = 0;
    
    while (num !== 1 && ans !== 500) {
        num % 2 === 0 ? num = num / 2 : num = num * 3 + 1;
        ans++;
    }
    return num === 1 ? ans : -1;
}