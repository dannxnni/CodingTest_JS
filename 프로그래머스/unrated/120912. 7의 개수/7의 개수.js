function solution(array) {
    let cnt = 0;
        
    for (let num of array) {
        String(num).split("").forEach(n => {
        if (n === "7")  cnt++;
        })
    }
    return cnt;
}