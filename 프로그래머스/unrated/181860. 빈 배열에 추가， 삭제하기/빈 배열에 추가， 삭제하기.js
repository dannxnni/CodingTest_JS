function solution(arr, flag) {
    let x = [];
    
    flag.forEach((el, idx) => {
        if (el) {
            for (let i = 0; i < arr[idx]*2; i++) {
                x.push(arr[idx]);
            }
        } else {
            for (let i = 0; i < arr[idx]; i++) {
                x.pop();
            }
        }
    })
    return x;
}