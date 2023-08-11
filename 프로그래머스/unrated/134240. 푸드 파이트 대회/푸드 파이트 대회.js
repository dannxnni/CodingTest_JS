function solution(food) {
    let left = [];
    
    food.forEach((item, idx) => {
        if (item >= 2) {
            const q = Math.floor(item / 2);
            left.push(String(idx).repeat(q));
        }
    });
    
    const ans = [left.join(""), 0, left.reverse().join("")];
    
    return ans.join("");
}