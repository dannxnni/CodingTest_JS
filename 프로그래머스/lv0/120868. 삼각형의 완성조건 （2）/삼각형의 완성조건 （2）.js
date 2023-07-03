function solution(sides) {
    const long = Math.max(...sides);
    const longIndex = sides.indexOf(long);
    const shortIndex = longIndex === 0 ? 1 : 0;
    
    const longSide = sides[longIndex];
    const shortSide = sides[shortIndex];
    
    let answer = shortSide;
    answer += shortSide - 1;
    return answer;
}