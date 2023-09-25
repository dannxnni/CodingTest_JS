function solution(my_string) {
    let ans = "";
    let v = ["a", "e", "i", "o", "u"];
    
    for (let i = 0; i < my_string.length; i++) {
        if (!v.includes(my_string[i])) {
            ans += my_string[i];
        }
    }
    return ans;
}