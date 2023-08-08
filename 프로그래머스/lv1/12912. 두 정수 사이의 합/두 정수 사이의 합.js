function solution(a, b) {
    let sum = 0;
    let aa = Math.min(a, b);
    let bb = Math.max(a, b);
    
    for (let i = aa; i <= bb; i++) {
        sum += i;
    }
    return sum;
}