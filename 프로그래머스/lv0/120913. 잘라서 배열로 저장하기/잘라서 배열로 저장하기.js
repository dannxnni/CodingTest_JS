function solution(my_str, n) {
    const str = my_str.split("");
    const answer = [];
    
    while(str.length > 0) {
        answer.push(str.splice(0, n).join(""));
    }
    return answer;
}