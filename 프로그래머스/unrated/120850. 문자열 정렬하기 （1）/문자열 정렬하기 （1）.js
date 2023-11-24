function solution(my_string) {
    return my_string.split("").map(Number).filter(e => !isNaN(e)).sort((a, b) => a - b);
}
