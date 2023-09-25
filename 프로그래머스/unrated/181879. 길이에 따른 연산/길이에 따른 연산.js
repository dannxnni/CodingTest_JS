function solution(num_list) {
    
    if (num_list.length >= 11) {
        return num_list.reduce((acc, cur) => acc + cur, 0);
    }
    else if (num_list.length <= 10) {
        return num_list.reduce((acc, cur) => acc * cur);
    }
}