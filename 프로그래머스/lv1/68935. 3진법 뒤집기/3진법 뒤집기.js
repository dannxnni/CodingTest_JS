function solution(n) {
    let ter = n.toString(3);
    let reverse_ter = ter.split("").reverse().join("");
    let dec = parseInt(reverse_ter, 3);
    
    return dec;
}