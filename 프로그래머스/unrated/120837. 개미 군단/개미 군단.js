function solution(hp) {
    const [one, two, three] = [5, 3, 1];
    let sum = 0;
    
    sum += Math.floor(hp / one);
    hp %= one;
    sum += Math.floor(hp / two);
    hp %= two;
    sum += Math.floor(hp / three);
    return sum;
}