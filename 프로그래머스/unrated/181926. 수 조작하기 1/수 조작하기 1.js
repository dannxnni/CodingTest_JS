function solution(n, control) {
    let cl = control.split("");
    
    for (let i = 0; i < cl.length; i++) {
        if (cl[i] === "w")    n += 1;
        else if (cl[i] === "s")    n -= 1;
        else if (cl[i] === "d")    n += 10;
        else if (cl[i] === "a")    n -= 10;
    }
    return n;
}