function solution(n) {
    return new Array(n).fill(0).map((v, i) => i + 1).filter(i => n % i === 0);
}