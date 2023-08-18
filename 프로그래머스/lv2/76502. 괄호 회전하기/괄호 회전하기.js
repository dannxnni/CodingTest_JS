function solution(s) {
    let ans = 0;
    const stack = [];
    
    if (s.length % 2 === 1) return 0;
    
    for (let i = 0; i < s.length; i++) {
        let str = s.slice(i) + s.slice(0, i);
        let flag = true;
        
        for (let i of str) {
            if (i === "(" || i === "{" || i === "[")    stack.push(i);
            else {
                const bracket = stack.pop();
                if (i === ")" && bracket === "(") continue;
                if (i === "}" && bracket === "{") continue;
                if (i === "]" && bracket === "[") continue;
                flag = false;
                break;
            }
        }
        if (flag)   ans++;
    }
    return ans;
}