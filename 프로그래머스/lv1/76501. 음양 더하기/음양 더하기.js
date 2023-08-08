function solution(absolutes, signs) {
    let sum = 0;
    
    for (let i = 0; i < absolutes.length; i++) {
        let num = absolutes[i];
        let isTrue = signs[i];
        
        if (isTrue) sum += num;
        else    sum -= num;
    }
    return sum;
}