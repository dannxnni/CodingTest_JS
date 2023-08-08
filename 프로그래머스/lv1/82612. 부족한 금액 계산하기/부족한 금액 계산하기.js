function solution(price, money, count) {
    let sum = 0;
    for (let i = 1; i <= count; i++) {
        sum += price * i;
    }
    
    let gap = money - sum;
    
    return gap >= 0 ? 0 : Math.abs(gap);
}