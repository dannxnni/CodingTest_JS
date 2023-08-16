function solution(n, words) {
    for (let i = 1; i < words.length; i++) {
        const curWord = words[i];
        
        if (words.indexOf(curWord) !== i) {
            return [i % n+1, Math.floor(i / n ) + 1];
        }
        
        const lastWord = words[i - 1].slice(-1);
        const firstWord = curWord.charAt(0);
        
        if (lastWord !== firstWord) {
            return [i % n + 1, Math.floor(i / n) + 1];
        }
    }
    return [0, 0];
}