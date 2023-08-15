function solution(n) {
    let binn = n.toString(2).split("1").length;
    
    while (true) {
        n++;
        if (n.toString(2).split("1").length === binn)   return n;
    }
}