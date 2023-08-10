function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    while(budget > 0) {
        let cnt = 0;
        
        for (let i = 0; i < d.length; i++) {
            if (budget - d[i] >= 0) {
                budget -= d[i];
                cnt++;
            } else {
                break;
            }
        }
        return cnt;
    }
}