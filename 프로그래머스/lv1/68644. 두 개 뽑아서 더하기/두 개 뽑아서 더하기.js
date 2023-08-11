function solution(numbers) {
    let sum = [];
    
    for (let i = 0; i < numbers.length - 1; i++) {
        let a = numbers[i];
        
        for (let j = i + 1; j < numbers.length; j++) {
            let b = numbers[j];
            sum.push(a + b);
        }
    }
    let ans = Array.from(new Set(sum));
    
    return ans.sort((a, b) => a - b);
}