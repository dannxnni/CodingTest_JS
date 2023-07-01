function solution(s) {
    let s_split = s.split(" ");
    let stack = [];
    
    for (let i = 0; i < s_split.length; i++) {
        if (s_split[i] === "Z") {
            stack.pop();
            continue;
        }
        stack.push(s_split[i]);
    }
    let sum = stack.reduce((acc, cur) => {
        return acc + Number(cur)
    }, 0);
    return sum;
}