function solution(my_string) {
    // return my_string.split('').map(a => a.toLowerCase()).sort().join('');
    return [...my_string.toLowerCase()].sort().join('');
}    
