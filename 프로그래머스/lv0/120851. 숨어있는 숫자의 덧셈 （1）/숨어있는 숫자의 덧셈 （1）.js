function solution(my_string) {
    let sum = 0;
    let str = my_string.split("");
    
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i])) sum += Number(str[i]);
    }
    return sum;
}