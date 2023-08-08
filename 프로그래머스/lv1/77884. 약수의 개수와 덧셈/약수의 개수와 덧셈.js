function solution(left, right) {
    var answer = 0;
    
    // 제곱근이 정수 O => 약수 개수 홀수
    // 제곱근이 정수 X => 약수 개수 짝수 
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        }
        else {
            answer += i;
        }
    }
    return answer;
}