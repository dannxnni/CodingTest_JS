function solution(s) {
    let num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var ans = s;
    
    for (let i = 0; i < num.length; i++) {
        let arr = ans.split(num[i]);
        ans = arr.join(i);
    }
    return Number(ans);
}