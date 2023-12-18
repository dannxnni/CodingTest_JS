function solution(my_str, n) {
    let ans = [];
    
    while (my_str.length) {
        ans.push(my_str.slice(0, n));
        my_str = my_str.slice(n);
    }
    return ans;
}