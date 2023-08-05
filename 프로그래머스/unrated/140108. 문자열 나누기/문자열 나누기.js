function solution(s) {
    let isX = [s[0], 0];
    let isNotX = '';
    const res = [];
    
    for (let i = 0; i < s.length; i++) {
        if (isX[0] === s[i])    isX[1]++;
        else isNotX += s[i];
        
        if (isX[1] === isNotX.length) {
            res.push(isX[0] + isNotX);
            isX = [s[i + 1], 0];
            isNotX = '';
        }
    }
    if(isX[0])  res.push(isX[0]);
    return res.length;
}