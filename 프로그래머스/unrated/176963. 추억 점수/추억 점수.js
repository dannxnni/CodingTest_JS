function solution(name, yearning, photo) {
    const answer = [];
    const map = new Map();
    
    name.forEach((item, index) => {     // 이름 => ket, 점수 => index
        map.set(item, yearning[index]);
    });
    
    for (let i = 0; i < photo.length; i++) {
        let count = 0;
        
        for (let j = 0; j < photo[i].length; j++) {
            const score = map.get(photo[i][j]);
            if (!score) continue;   // 없는 사람일 경우
            count += score;
        }
        answer.push(count);
    }
    return answer;
}