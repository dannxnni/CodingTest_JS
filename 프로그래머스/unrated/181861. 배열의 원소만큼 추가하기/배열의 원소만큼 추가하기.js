function solution(arr) {
    let x = [];
    for (let a of arr) {
        for (let i = 0; i < a; i++) {
            x.push(a);
        }
    }
    return x;
}