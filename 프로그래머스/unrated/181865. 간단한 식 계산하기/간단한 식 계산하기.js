function solution(binomial) {
    let [a, op, b] = binomial.split(" ");
    
    let oper = {
        "+" : (a, b) => a + b,
        "-" : (a, b) => a - b,
        "*" : (a, b) => a * b
    }
    return oper[op](Number(a), Number(b));
}   