function solution(s) {
    let str = s.split(" ").map(Number).sort((a, b) => a - b);
    return `${str[0]} ${str[str.length - 1]}`;
}