function solution(sizes) {
    
    for (let i = 0; i < sizes.length; i++) {
        let w = sizes[i][0];
        let h = sizes[i][1];
        
        if (w < h) {
            [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
        }
    }
    
    let mx = sizes.sort((a, b) => b[0] - a[0])[0][0];
    let my = sizes.sort((a, b) => b[1] - a[1])[0][1];
    
    return mx * my;
}