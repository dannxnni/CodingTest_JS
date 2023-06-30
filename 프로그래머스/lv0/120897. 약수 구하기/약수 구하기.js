function solution(n) {
    var answer = [];
    let a = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            answer[a] = i;
            a++;
        }
    }
    return answer;
}