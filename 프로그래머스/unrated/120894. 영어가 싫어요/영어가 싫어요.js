function solution(numbers) {
  const arr = ["zero", "one", "two", "three", "four", "five", 'six', "seven", "eight", "nine"]
    
  arr.forEach((num, idx) => {
    numbers = numbers.split(num).join(idx)}) 
  
  return Number(numbers)
}