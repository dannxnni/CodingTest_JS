function solution(numbers) {
    let sum = 0;
    numbers.forEach(n => {
        sum += n;
    });
    return sum / numbers.length;
}