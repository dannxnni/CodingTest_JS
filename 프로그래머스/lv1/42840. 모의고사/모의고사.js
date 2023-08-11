function solution(answers) {
    let ans = [];
    let cnt = [0, 0, 0];
    const p1 = [1, 2, 3, 4, 5];
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === p1[i % p1.length])   cnt[0]++;
        if (answers[i] === p2[i % p2.length])   cnt[1]++;
        if (answers[i] === p3[i % p3.length])   cnt[2]++;
    }
    
    for (let i = 0; i < cnt.length; i++) {
        if (Math.max(cnt[0], cnt[1], cnt[2]) === cnt[i])    ans.push(i+1);
    }
    return ans;
}