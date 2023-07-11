function solution(r1, r2) {
    let answer = 0;
    
    for (let x = 1; x <= r2; x++) {
        let maxY = Math.floor(Math.sqrt(r2**2 - x**2));
        if (r1 > x) {
            var minY = Math.ceil(Math.sqrt(r1**2 - x**2));
        }
        else {
            var minY = 0;
        }
        answer += (maxY - minY + 1);
    }
    return 4 * answer;
}