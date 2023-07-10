function solution(targets) {
    // A : x축에 평행한 직선 형태 / (s, e) 형태
    // B : x좌표에서 y축에 수평 형태
    targets.sort((a,b) => b[0] - a[0]);
    
    let answer = 1;
    let cp = targets[0][0];
    
    for (let i = 1; i < targets.length; i++) {
        const [start, end] = targets[i];
        
        if (end <= cp) {
            cp = start;
            answer++;
        }
    }
    return answer;
}