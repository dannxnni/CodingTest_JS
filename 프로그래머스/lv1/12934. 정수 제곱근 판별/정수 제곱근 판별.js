function solution(n) {
    let num = Math.sqrt(n);
    
    // 만약 n이 정수 제곱근이 아니라면 1로 나눈 나머지가 0이 아닌 0.xx
    // ex ) n = 3 => num = 1.xx => 1.xx % 1 !== 0
    if (num % 1 !== 0)  return -1;
    else    return (num + 1) ** 2;
}