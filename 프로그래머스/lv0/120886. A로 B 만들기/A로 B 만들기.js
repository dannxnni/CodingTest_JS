function solution(before, after) {
    before = [...before].sort();
    after = [...after].sort();
    
    return before.filter((a, c) => a === after[c]).length === after.length ? 1 : 0;
}