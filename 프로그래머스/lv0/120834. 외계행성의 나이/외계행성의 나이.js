function solution(age) {
    let arr = {
        0 : "a", 1 : "b", 2 : "c", 3 : "d", 4 : "e", 5 : "f", 6 : "g", 7 : "h", 8 : "i", 9 : "j"
    }
    let new_age = age + "";
    return new_age.split("").map((e) => arr[e]).join("");
}