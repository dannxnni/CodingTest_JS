function solution(a, d, included) {
    let ans = 0;
    
    for (let i = 0; i < included.length; i++) {
        if (included[i]) {
            ans += a + d * i;
        }
    }
    return ans;
}