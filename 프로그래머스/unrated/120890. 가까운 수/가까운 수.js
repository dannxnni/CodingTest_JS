function solution(array, n) {
    let arr = array.sort((a, b) => a - b);
    let res = arr[0];
    
    for (let i of arr) {
        if (Math.abs(n - i) < Math.abs(n - res)) {
            res = i;
        }
    }
    return res;
}