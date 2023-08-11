function solution(a, b, n) {
    let coke = n;
    let exchanged = 0;
    
    while (coke >= a) {
        let q = Math.floor(coke / a);
        coke = coke - (q * a) + (q * b);
        exchanged += q * b;
    }
    return exchanged;
}