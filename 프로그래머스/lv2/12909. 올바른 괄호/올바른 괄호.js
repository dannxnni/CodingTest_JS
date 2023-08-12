function solution(s){
    let stack = [];
    
    if (s[0] === ')' || s[s.length - 1] === '(')   return false;
    
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        
        if (stack[stack.length -2] === '(' && stack[stack.length - 1] === ')') {
            stack.pop();
            stack.pop();
        } 
    }
    
    if (stack.length > 0)   return false;
    else return true;
}