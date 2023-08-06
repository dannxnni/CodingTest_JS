function solution(n) {
    let arr = String(n).split("").map(i => Number(i));
    
    let sum = arr.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    
    return sum;
}