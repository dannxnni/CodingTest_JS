function solution(my_string) {
    const str = my_string.split(" ");
    let answer = Number(str[0]);
    
    str.forEach((n, index) => {
        if (n === "+") {
            answer += Number(str[index + 1]);
        }
        else if (n === "-") {
            answer -= Number(str[index + 1]);
        }
    });
    return answer;
}