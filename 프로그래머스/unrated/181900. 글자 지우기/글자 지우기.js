function solution(my_string, indices) {
    let ans = "";
    for (let i = 0; i < my_string.length; i++) {
        if (!indices.includes(i)) ans += my_string[i];
    }
    return ans;
}
