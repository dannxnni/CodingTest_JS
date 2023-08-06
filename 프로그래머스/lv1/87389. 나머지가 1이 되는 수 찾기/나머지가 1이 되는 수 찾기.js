function solution(n) {
    let div = 2;
    
    while (true) {
        if (n % div === 1) {
            return div;
        }
        div++;
    }
}