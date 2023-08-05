function solution(t, p) {
    const numberP = Number(p);
    let cnt = 0;
    
    for (let i = 0; i < t.length - p.length + 1; i++) {
        const sliceT = t.slice(i, i + p.length);
        const numberT = Number(sliceT);
        
        if (numberT <= numberP) {
            cnt += 1;
        }
    }
    return cnt;
}