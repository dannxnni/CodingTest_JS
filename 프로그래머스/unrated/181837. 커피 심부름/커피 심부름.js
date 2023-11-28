function solution(order) {
    let sum = 0;
    
    for (let i = 0; i < order.length; i++) {
        if (order[i].includes("americano") || order[i].includes("anything")) {
            sum += 4500;
        }
        if (order[i].includes("cafelatte")) {
            sum += 5000;
        }
    }
    return sum;
}