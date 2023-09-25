function solution(my_string, letter) {
    let ans = "";
    let str = my_string.split("");
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== letter)  ans += str[i];
    }
    return ans;
}