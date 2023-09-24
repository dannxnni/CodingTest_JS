function solution(array, height) {
    let cnt = 0;
    
    for (let i of array) {
        if (i > height) cnt++;
    }
    return cnt;
}