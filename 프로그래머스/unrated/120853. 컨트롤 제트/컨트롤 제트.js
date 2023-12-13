function solution(s) {
    let arrS = s.split(" ");
    let ans = 0;
    
    for (let i = 0; i < arrS.length; i++) {
        if (arrS[i] === "Z") {
            arrS[i - 1] = 0;
            arrS[i] = 0
        }
    }
    return arrS.reduce((acc, cur) => acc + Number(cur), 0);
}