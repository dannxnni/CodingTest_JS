function solution(s) {
    let ans = [];
    let arrS = s.split("");
    
    arrS.forEach(i => {
        if (s.indexOf(i) === s.lastIndexOf(i))  ans.push(i);
    })
    return ans.sort().join("");
}