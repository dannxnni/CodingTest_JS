function solution(s) {
    let ss = s.split(" ");
    let ans = [];
    
    for (let i = 0; i < ss.length; i++) {
        let word = ss[i];
        let newWord = "";
        
        for (let j = 0; j < word.length; j++) {
            if (j % 2 === 0)    newWord += word[j].toUpperCase();
            else newWord += word[j].toLowerCase();
        }
        ans.push(newWord);
    }
    return ans.join(" ");
}