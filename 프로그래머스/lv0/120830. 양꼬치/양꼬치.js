function solution(n, k) {
    var answer = n * 12000 + 2000 * k - Math.floor(n / 10) * 2000;
    return answer;
}