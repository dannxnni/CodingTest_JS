function solution(A, B) {
    let cnt = 0;
    A = A.split("");
    
    while(cnt < A.length) {
        if (A.join("") === B)   return cnt;
        A.unshift(A.pop());
        cnt++;
    }
    return -1;
}