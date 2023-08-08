function solution(n) {                       
    let arr = String(n).split("").map((i) => Number(i)).sort((a, b) => b - a);
    
    return Number(arr.join(""));
}