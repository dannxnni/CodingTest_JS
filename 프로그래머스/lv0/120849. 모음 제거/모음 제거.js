function solution(my_string) {
    let v = 'aeiou';
    
    return my_string.split("").filter(e => !v.includes(e)).join("");
}