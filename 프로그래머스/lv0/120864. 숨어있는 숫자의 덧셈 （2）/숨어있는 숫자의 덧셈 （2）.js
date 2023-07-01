function solution(my_string) {
    const num = my_string.match(/[0-9]+/g);
    
    return num ? num.map(n => Number(n)).reduce((a, c) => a + c, 0) : 0;
}