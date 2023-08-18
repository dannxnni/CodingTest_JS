function solution(elements) {
    const set = new Set();
    
    for (let i = 1; i <= elements.length; i++) {
        let sum = 0;
        for (let j = 0; j <= elements.length; j++) {
            if (j === 0) {
                sum = elements.slice(0, i).reduce((a, c) => a + c, 0);
            }
            if (j !== 0) {
                sum -= elements[j - 1];
                sum += elements[(j + i - 1) % elements.length];
            }
            set.add(sum);
        }
    }
    return set.size;
}