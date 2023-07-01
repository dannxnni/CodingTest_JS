function solution(numbers) {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    arr.forEach((n, i) => {
        numbers = numbers.split(n).join(i)
    });
    return Number(numbers);
}