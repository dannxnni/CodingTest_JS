function solution(s) {
    let iter = 0;
    let cnt = 0;
    while (s.length > 1) {
        let nS = "";
        
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "0") {
                cnt++;
                continue;
            }
            nS += s[i];
        }
        s = nS.length.toString(2);
        iter++;
    }
    return [iter, cnt];
}