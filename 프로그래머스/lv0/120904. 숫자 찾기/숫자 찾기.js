function solution(num, k) {
    return [...String(num)].map((v) => Number(v)).indexOf(k) + 1 || -1;
}