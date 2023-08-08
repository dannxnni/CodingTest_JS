function solution(x) {
    let arr = String(x).split("").map(i => Number(i));
    let sum = arr.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    
    return x % sum === 0 ? true : false;
}