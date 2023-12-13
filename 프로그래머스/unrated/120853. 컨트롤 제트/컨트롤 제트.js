function solution(s) {
    let stack = [];
    
    s.split(" ").forEach(val => {
        if (val === "Z")    stack.pop();
        else    stack.push(Number(val));
    })
    return stack.length ? stack.reduce((acc, cur) => acc + cur) : 0;
}