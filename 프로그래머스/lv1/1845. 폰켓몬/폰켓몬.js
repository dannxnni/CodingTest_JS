function solution(nums) {
    const n = nums.length / 2;
    const set = Array.from(new Set(nums));
    
    if (n === set.length) {
        return n;
    }
    else if (n !== set.length) {
        return Math.min(n, set.length);
    }
}