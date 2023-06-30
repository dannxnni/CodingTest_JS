function solution(cipher, code) {
    let answer = '';
    cipher.split('');
    
    for (let i = 0; i < cipher.length; i++) {
        if ((i + 1) % code === 0)
        answer += cipher.charAt(i);
    }
    return answer;
}