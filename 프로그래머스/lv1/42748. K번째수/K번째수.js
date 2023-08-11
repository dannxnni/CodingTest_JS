function solution(array, commands) {
    let ans = [];
    
    for (let i = 0; i < commands.length; i++) {
        let com = commands[i];
        let nArr = array.slice(com[0] - 1, com[1]);
        nArr.sort((a, b) => a - b);
        ans.push(nArr[com[2] - 1]);
    }
    return ans;
}