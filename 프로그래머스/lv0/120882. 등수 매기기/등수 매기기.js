function solution(score) {
    const avg = score.map(v => (v[0] + v[1]) / 2);
    const sort_avg = avg.slice().sort((a, b) => b - a);
    
    return avg.map(v => sort_avg.indexOf(v)+1);
}