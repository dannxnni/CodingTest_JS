function solution(arr) {
    let len = arr.length;
    let zero = Math.pow(2, Math.ceil(Math.log2(len)));
    
    for (let i = 0; i < zero - len; i++) {
        arr.push(0);
    }
    return arr;
}