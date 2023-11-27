function solution(num_list) {
    let cnt = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        let curNum = num_list[i];
        
        while (curNum !== 1) {
            if (curNum % 2 === 0) {
                curNum /= 2;
            } else {
                curNum = (curNum - 1) / 2;
            }
            cnt++;
        }
    }
    return cnt;
}