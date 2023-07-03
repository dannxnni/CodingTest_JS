function solution(dots) {
    dots.sort((a, b) => a[0] - b[0]);
    
    const width = Math.abs(dots[1][1] - dots[0][1]);    // 가로
    const length = Math.abs(dots[2][0] - dots[0][0]);   // 세로
    
    return width * length;
}