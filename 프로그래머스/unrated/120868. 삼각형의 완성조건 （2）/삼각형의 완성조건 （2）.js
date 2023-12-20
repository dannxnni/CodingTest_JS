function solution(sides) {
    let [a, b] = sides.sort((a, b) => a - b)
    let cnt = 0;
    
    for (let i = b - a + 1; i <= b; i++) {
        cnt++;
    }
    for (let i = b + 1; i < a + b; i++) {
        cnt++;
    }
    return cnt;
}