function solution(s) {
    let answer = [];
    let arr_s = s.split("");
    
    arr_s.forEach((n) => {
        if (s.indexOf(n) === s.lastIndexOf(n)) {
            answer.push(n);
        }
    });
    return answer.sort().join("");
}