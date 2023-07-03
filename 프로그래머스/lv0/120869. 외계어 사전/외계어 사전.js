function solution(spell, dic) {
    const arr = [];
    
    dic.forEach((word) => {
        let count = 0;
        
        spell.forEach((item) => {
            if (word.includes(item)) {
                count += 1;
                }
        })
        if (count === spell.length) {
            arr.push(word);
        }
    })
    return arr.length === 0 ? 2 : 1;
}