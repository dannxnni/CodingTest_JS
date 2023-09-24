function solution(n) {
    let ans = n.toString();
    let sum = 0;
    
    for (i of ans) {
        sum += Number(i);
    }
    return sum;
}