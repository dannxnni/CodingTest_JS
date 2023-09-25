function solution(num_list) {
    let sum = 0;
    let odd = "";    // 홀수
    let even = "";   // 짝수
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0)  even += num_list[i];
        else    odd += num_list[i];
    }
    return parseInt(even) + parseInt(odd);
}